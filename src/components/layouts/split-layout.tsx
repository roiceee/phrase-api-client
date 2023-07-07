import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "./main-layout";
import OffCanvasLeft from "../api-page-components/off-canvas-left";
import AdminSideNav from "../admin-page-components/AdminSideNav";

interface LayoutWithSideNavProps {
    children: JSX.Element | JSX.Element[];
    sideNav: JSX.Element;
}

function LayoutWithSideNav({ children, sideNav }: LayoutWithSideNavProps) {
    return ( 
        <MainLayout>
      <Container fluid>
        <Row>
          <Col md={2}>
            <OffCanvasLeft sideNav={sideNav}/>
          </Col>
          <Col md={9} className="m-2">
            {children}
          </Col>
        </Row>
      </Container>
    </MainLayout>
     );
}

export default LayoutWithSideNav;