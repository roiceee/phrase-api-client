import Submissions from "@/components/admin-page-components/submissions";

function ApprovedSubmissions() {
  return (
    <Submissions
      fetchUrl={`${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-approved`}
      clientSideRoute="/admin/submissions/approved"
      title="Approved Submissions"
    />
  );
}

export default ApprovedSubmissions;
