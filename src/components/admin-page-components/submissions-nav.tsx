import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";

function SubmissionsNav() {
  const router = useRouter();

  const checkActiveContainsPath = (activeOn: string): boolean => {
    const pathname = router.asPath;
    return pathname.includes(activeOn);
  };

  return (
    <>
      <Nav variant="pills" as="ul" className="gap-2">
        <Nav.Item as="li">
          <Nav.Link
            as={Link}
            href="/admin/submissions/all/1"
            eventKey="all"
            active={checkActiveContainsPath("/admin/submissions/all")}
          >
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            as={Link}
            href="/admin/submissions/approved/1"
            eventKey="approved"
            active={checkActiveContainsPath("/admin/submissions/approved")}
          >
            Approved
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            as={Link}
            href="/admin/submissions/pending/1"
            eventKey="pending"
            active={checkActiveContainsPath("/admin/submissions/pending")}
          >
            Pending
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            as={Link}
            href="/admin/submissions/rejected/0"
            eventKey="rejected"
            active={checkActiveContainsPath("/admin/submissions/rejected")}
          >
            Rejected
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default SubmissionsNav;
