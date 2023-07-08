import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Nav } from "react-bootstrap";

interface LinkProps {
  href: string;
  displayName: string;
  highlightWhenContains?: string;
}

interface SideNavProps {
  className?: string;
  links: LinkProps[];
}

function SideNav({ className, links }: SideNavProps) {
  const router = useRouter();

  const checkActiveExactPath = useCallback(
    (activeOn: string): boolean => {
      const pathname = router.pathname;
      return pathname === activeOn;
    },
    [router.pathname]
  );

  const checkActiveContainsPath = useCallback(
    (activeOn: string): boolean => {
      const pathname = router.pathname;
      return pathname.includes(activeOn);
    },
    [router.pathname]
  );

  return (
    <Nav
      className={`flex-column mx-auto flex-fill p-3 bg-light ${className}`}
      variant={"pills"}
    >
      {links.map((link, index) => {
        return (
          <Nav.Item key={index}>
            <Nav.Link
              as={Link}
              href={link.href}
              className="navlink px-2"
              active={
                link.highlightWhenContains
                  ? checkActiveContainsPath(link.highlightWhenContains)
                  : checkActiveExactPath(link.href)
              }
            >
              {link.displayName}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default SideNav;
