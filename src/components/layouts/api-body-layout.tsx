import { Col, Row } from "react-bootstrap";
import SideNav from "../side-nav";
import SideNavCollapse from "../SideNavCollapse";
import MainLayout from "./main-layout";

interface APIBodyLayoutProps {
  children: JSX.Element | JSX.Element[];
}
export default function APIBodyLayout({ children }: APIBodyLayoutProps) {
  return (
    <MainLayout>
      <Row className="mt-lg-3">
        <Col md={2}>
          <aside>
            <SideNavCollapse>
              <SideNav />
            </SideNavCollapse>
          </aside>
        </Col>
        <Col style={{ borderLeft: "2px solid gray" }}>{children}</Col>
      </Row>
    </MainLayout>
  );
}
