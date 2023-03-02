import { Col, Container, Row } from "react-bootstrap";
import Footer from "../footer";
import NavigationBar from "../navbar";
import OffCanvas from "../offcanvas";
import SideNav from "../side-nav";
import SideNavCollapse from "../side-nav-collapse";
import MainLayout from "./main-layout";

interface APIBodyLayoutProps {
  children: JSX.Element | JSX.Element[];
}
export default function APIBodyLayout({ children }: APIBodyLayoutProps) {
  return (
    <>
      <NavigationBar />
      <Container fluid>
        <Row>
          <Col md={2}><OffCanvas/></Col>
          <Col className="p-3">{children}</Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
