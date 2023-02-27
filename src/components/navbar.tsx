import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

function NavigationBar() {

  const router = useRouter();

  const activeOnExactPath = useCallback((identifier: string) : boolean => {
  
      return router.pathname === identifier;
  }, [router]) 

  const activeOnContainsPath = useCallback((identifier: string) : boolean => {
      return router.pathname.includes(identifier);
  }, [router.pathname])

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
          <Nav className="me-auto">
            <Nav.Link href="/" active={activeOnExactPath("/")}>Home</Nav.Link>
            <Nav.Link href="/_api/overview" active={activeOnContainsPath("/_api")}>API</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;