import { Col, Container, Row } from "react-bootstrap";
import OffCanvasLeft from "../api-page-components/off-canvas-left";
import MainLayout from "./main-layout";


interface APIBodyLayoutProps {
  children: JSX.Element | JSX.Element[];
}
export default function APIPageLayout({ children }: APIBodyLayoutProps) {
  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col md={2}>
            <OffCanvasLeft/>
          </Col>
          <Col md={8} className="p-3">{children}</Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
