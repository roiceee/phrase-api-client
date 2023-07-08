import Submissions from "@/components/admin-page-components/submissions";

function RejectedSubmissions() {
  return (
    <Submissions
      fetchUrl={`${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-rejected`}
      clientSideRoute="/admin/submissions/rejected"
      title="Rejected Submissions"
    />
  );
}

export default RejectedSubmissions;
