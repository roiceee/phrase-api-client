import SubmissionsNav from "@/components/admin-page-components/submissions-nav";
import HeadWrapper from "@/components/gen-components/head-wrapper";
import { Container } from "react-bootstrap";
import AdminPageLayout from "./admin-page-layout";


interface SubmissionsLayoutProps {
    children: JSX.Element | JSX.Element[];
}

function SubmissionsLayout({ children }: SubmissionsLayoutProps) {
  return (
    <AdminPageLayout>
      <HeadWrapper title="Submissions" />
      <Container>
        <h2>Submissions | Admin</h2>
        <p>
          Approve, or reject phrase submissions. Approved phrases would be
          included to the resource API available for requests.
        </p>
        <hr />
        <SubmissionsNav/>
        <br/>
        {children}
      </Container>
    </AdminPageLayout>
  );
}

export default SubmissionsLayout;
