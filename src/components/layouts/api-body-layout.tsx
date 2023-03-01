import { Col, Row } from "react-bootstrap";
import SideNav from "../side-nav";
import MainLayout from "./main-layout";

interface APIBodyLayoutProps {
  children: JSX.Element | JSX.Element[];
}
export default function APIBodyLayout({ children }: APIBodyLayoutProps) {
  return (
    <MainLayout>
      <Row className="mt-3">
        <Col md={2}>
          <aside>
            <SideNav />
          </aside>
        </Col>
        <Col>{children}</Col>
      </Row>
    </MainLayout>
  );
}
