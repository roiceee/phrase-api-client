import HeadWrapper from "@/components/head-wrapper";
import AdminPageLayout from "@/components/layouts/admin-page-layout";
import { Container } from "react-bootstrap";

function AdminPage() {
  return (
    <AdminPageLayout>
        <HeadWrapper title="Phrase API Admin" />
        <Container>
            <h2>Phrase API Admin</h2>
        </Container>
    </AdminPageLayout>
  );
}

export default AdminPage;
