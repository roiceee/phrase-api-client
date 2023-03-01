import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function UserProfileDropdown() {

  const { user, logout } = useAuth0();

  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">

        <Dropdown.Header>{!user ? "user@email.com" : user.email}</Dropdown.Header>
      <Dropdown.Item onClick={() => logout()}>Log out</Dropdown.Item>
    </DropdownButton>
  );
}


