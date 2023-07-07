import HeadWrapper from "@/components/head-wrapper";
import AdminPageLayout from "./admin-page-layout";
import { Container } from "react-bootstrap";


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
        {children}
      </Container>
    </AdminPageLayout>
  );
}

export default SubmissionsLayout;
