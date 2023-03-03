import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

interface SideNavCollapseProps {
  children: JSX.Element | JSX.Element[];
}

export default function SideNavCollapse({ children }: SideNavCollapseProps) {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Toggle
          aria-controls="side-nav-collapse"
          style={{ border: "none" }}
        />
        <Navbar.Collapse className="mt-3" id="side-nav-collapse">{children}</Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
