import HeadWrapper from "@/components/head-wrapper";
import AdminPageLayout from "@/components/layouts/admin-page-layout";
import { Container } from "react-bootstrap";

function SubmissionsPage() {
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
      </Container>
    </AdminPageLayout>
  );
}

export default SubmissionsPage;
