import AdminPhraseDiv from "@/components/admin-page-components/admin-phrase-div";
import SubmissionsLayout from "@/components/layouts/admin/submissions-layout";
import PhraseAdminPagination from "@/types/phrase-admin-pagination";
import {useAuth0} from "@auth0/auth0-react";
import { useCallback, useEffect, useMemo, useState } from "react";

function AllSubmissions() {
    const { getAccessTokenSilently } = useAuth0();
    const [submissions, setSubmissions] = useState<PhraseAdminPagination | null>(
      null
    );
  
    const fetchAllSubmissions = useCallback(async () => {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-all`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSubmissions(data);
      } else {
        console.log("failed");
      }
    }, [getAccessTokenSilently]);
  
    const renderSubmissions = useMemo(() => {
      if (!submissions) {
        return;
      }
      return submissions.content.map((submission) => {
        return (
          <div key={`div-${submission.id}`}>
            <hr key={`hr-${submission.id}`} className="my-0" />
            <AdminPhraseDiv key={`phrase-${submission.id}`} phrase={submission} />
          </div>
        );
      });
    }, [submissions]);
  
    useEffect(() => {
      fetchAllSubmissions();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <SubmissionsLayout>
        <div>
          <h4>All Submissions</h4>
          {renderSubmissions}
        </div>
      </SubmissionsLayout>
    );
  }
  
  export default AllSubmissions;
  