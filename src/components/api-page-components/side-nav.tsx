import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Nav from "react-bootstrap/Nav";

interface SideNavProps {
  className?: string;
}

export default function SideNav({ className }: SideNavProps) {
  const router = useRouter();

  const checkActive = useCallback(
    (eventKey: string): boolean => {
      const pathname = router.pathname;

      return pathname.includes(eventKey);
    },
    [router.pathname]
  );

  return (
    <Nav className={`flex-column mx-auto flex-fill p-3 bg-light ${className}`} variant={"pills"}>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/_api/overview"
          className="navlink px-2"
          active={checkActive("overview")}
        >
          Overview
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/_api/tutorial"
          className="navlink px-2"
          active={checkActive("tutorial")}
        >
          Tutorial
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
