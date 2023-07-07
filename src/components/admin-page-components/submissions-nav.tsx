import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";

function SubmissionsNav() {
  const router = useRouter();

  const checkActiveExactPath = (activeOn: string): boolean => {
    const pathname = router.asPath;
    return pathname === activeOn;
  };

  return (
    <Nav variant="pills" as="ul" className="gap-2">
      <Nav.Item as="li">
        <Nav.Link
          as={Link}
          href="/admin/submissions/all"
          eventKey="all"
          active={checkActiveExactPath("/admin/submissions/all")}
        >
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          as={Link}
          href="/admin/submissions/pending"
          eventKey="pending"
          active={checkActiveExactPath("/admin/submissions/pending")}
        >
          Pending
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          as={Link}
          href="/admin/submissions/rejected"
          eventKey="rejected"
          active={checkActiveExactPath("/admin/submissions/rejected")}
        >
          Rejected
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default SubmissionsNav;
