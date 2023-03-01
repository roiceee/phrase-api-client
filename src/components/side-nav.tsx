import { useRouter } from "next/router";
import { useCallback } from "react";
import Nav from "react-bootstrap/Nav";

interface SideNavProps {
  className?: string;
}

export default function SideNav({className} : SideNavProps) {
  const router = useRouter();

  const checkActive = useCallback(
    (eventKey: string): boolean => {
      const pathname = router.pathname;

      return pathname.includes(eventKey);
    },
    [router.pathname]
  );

  return (
    <Nav className={`flex-column px-3 ${className}`} variant={"pills"}>
      <Nav.Item>
        <Nav.Link
          href="/_api/overview"
          className="navlink"
          active={checkActive("overview")}
        >
          Overview
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/_api/quotes"
          className="navlink"
          active={checkActive("quotes")}
        >
          Quotes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/_api/jokes"
          className="navlink"
          active={checkActive("jokes")}
        >
          Jokes
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
