import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SignInButton from "./signInButton";
import UserProfileDropdown from "./user-profile-dropdown";
import { useAuth0 } from "@auth0/auth0-react";

function NavigationBar() {
  const router = useRouter();

  const { user } = useAuth0();

  const activeOnExactPath = useCallback(
    (identifier: string): boolean => {
      return router.pathname === identifier;
    },
    [router]
  );

  const activeOnContainsPath = useCallback(
    (identifier: string): boolean => {
      return router.pathname.includes(identifier);
    },
    [router.pathname]
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt="logo"
            src={"/images/phrase-icon.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Phrase API
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link href="/" active={activeOnExactPath("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/_api/overview"
              active={activeOnContainsPath("/_api")}
            >
              API
            </Nav.Link>
          </Nav>

          <Nav className="text-center">{!user ? <SignInButton /> : <UserProfileDropdown />}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
