
import { Container } from "react-bootstrap";
import Footer from "../footer";
import NavigationBar from "../navbar";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
