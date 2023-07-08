import AdminPhraseDiv from "@/components/admin-page-components/admin-phrase-div";
import Submissions from "@/components/admin-page-components/submissions";
import _ from "lodash";

function AllSubmissions() {
  return (
    <Submissions
      fetchUrl={`${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-all`}
      clientSideRoute="/admin/submissions/all"
      title="All Submissions"
    />
  );
}

export default AllSubmissions;
