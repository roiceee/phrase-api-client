import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "./main-layout";
import OffCanvasLeft from "../api-page-components/off-canvas-left";
import ApiSideNav from "../api-page-components/api-side-nav";
import AdminSideNav from "../admin-page-components/AdminSideNav";

interface AdminPageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function AdminPageLayout({ children }: AdminPageLayoutProps) {
  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col md={2}>
            <OffCanvasLeft sideNav={<AdminSideNav/>}/>
          </Col>
          <Col md={8} className="p-3">
            {children}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default AdminPageLayout;
