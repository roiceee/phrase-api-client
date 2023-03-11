import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SignInButton from "./signInButton";
import UserProfileDropdown from "./user-profile-dropdown";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{zIndex: "9999"}}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image
            alt="logo"
            src={"/images/phrase-icon.png"}
            width="30"
            height="30"
            priority={false}
            className="d-inline-block align-top"
          />{" "}
          Phrase API
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav-collapse" />
        <Navbar.Collapse id="main-nav-collapse">
          <Nav className="me-auto text-center">
            <Nav.Link as={Link} href="/" active={activeOnExactPath("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/_api/overview"
              active={activeOnContainsPath("/_api")}
            >
              API
            </Nav.Link>
          </Nav>

          <Nav className="text-center">
            {!user ? <SignInButton /> : <UserProfileDropdown />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
