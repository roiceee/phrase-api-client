import Submissions from "@/components/admin-page-components/submissions";

function PendingSubmissions() {
  return (
    <Submissions
      fetchUrl={`${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-pending`}
      clientSideRoute="/admin/submissions/pending/"
      title="Pending Submissions"
    />
  );
}

export default PendingSubmissions;
