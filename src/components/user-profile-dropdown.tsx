import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export default function UserProfileDropdown() {
  const { user, logout } = useAuth0();

  if (!user) {
    return <></>;
  }
  if (!user.picture) {
    return <></>;
  }

  return (
    <Dropdown id="dropdown-basic-button" title="User actions">
      <Dropdown.Toggle
        className="bg-dark border-0 text-light"
        id="dropdown-custom-components"
        
      >
        <Image
          src={user.picture}
          alt="User Profile"
          height={30}
          width={30}
          className="rounded-circle"
        />
      </Dropdown.Toggle>

      <DropdownMenu variant="dark" align={"end"}>
        <Dropdown.Header>
          {!user ? "user@email.com" : user.email}
        </Dropdown.Header>
        <Dropdown.Item as={Link} href="/_api-keys">My API Keys</Dropdown.Item>
        <Dropdown.Item onClick={() => logout()}>Log out</Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
  );
}
