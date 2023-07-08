import HeadWrapper from "@/components/gen-components/head-wrapper";
import AdminPageLayout from "./admin-page-layout";
import { Container } from "react-bootstrap";
import SubmissionsNav from "@/components/admin-page-components/submissions-nav";


interface SubmissionsLayoutProps {
    children: JSX.Element | JSX.Element[];
}

function SubmissionsLayout({ children }: SubmissionsLayoutProps) {
  return (
    <AdminPageLayout>
      <HeadWrapper title="Submissions" />
      <Container>
        <h2>Submissions</h2>
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
