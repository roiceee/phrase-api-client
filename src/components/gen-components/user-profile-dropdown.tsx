import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export default function UserProfileDropdown() {
  const { user, logout } = useAuth0();

  const logoutHandler = useCallback(() => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }, [logout]);

  if (!user) {
    return <></>;
  }

  return (
    <Dropdown id="dropdown-basic-button" title="User actions">
      <Dropdown.Toggle
        className="bg-dark border-0 text-light"
        id="dropdown-custom-components"
      >
        <Image
          src={
            user.picture === undefined
              ? "/images/phrase-icon.png"
              : user.picture
          }
          alt="User Profile"
          height={30}
          width={30}
          className="rounded-circle"
        />
      </Dropdown.Toggle>

      <DropdownMenu variant="dark" align={"end"}>
        <Dropdown.Header>
          <h6>{!user ? "" : user.name}</h6>
          <div style={{ fontSize: "0.8rem" }}>
            {user.name === user.email ? user.nickname : user.email}
          </div>
        </Dropdown.Header>
        <Dropdown.Item as={Link} href="/my-phrases">
          My Phrases
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/api-keys">
          My API Keys
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/admin">
          Phrase API Admin
        </Dropdown.Item>
        <Dropdown.Item onClick={logoutHandler} className="border-top pt-2">
          Log out
        </Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
  );
}
