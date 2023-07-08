import { Col, Container, Row } from "react-bootstrap";
import OffCanvasLeft from "../api-page-components/off-canvas-left";
import MainLayout from "./main-layout";
import ApiSideNav from "../api-page-components/api-side-nav";
import LayoutWithSideNav from "../gen-components/split-layout";

interface APIBodyLayoutProps {
  children: JSX.Element | JSX.Element[];
}
export default function APIPageLayout({ children }: APIBodyLayoutProps) {
  return (
    <LayoutWithSideNav sideNav={<ApiSideNav />}>{children}</LayoutWithSideNav>
  );
}
