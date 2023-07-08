import AdminPhraseDiv from "@/components/admin-page-components/admin-phrase-div";
import LoadingDiv from "@/components/gen-components/loading-div";
import RefreshButton from "@/components/gen-components/refresh-button";
import SubmissionsLayout from "@/components/layouts/admin/submissions-layout";
import createDefaultPhraseAdminPagination from "@/types/phrase-admin-pagination/default-phrase-admin-pagination";
import PhraseAdminPagination from "@/types/phrase-admin-pagination/phrase-admin-pagination";
import { useAuth0 } from "@auth0/auth0-react";
import _ from "lodash";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

function AllSubmissions() {
  const { getAccessTokenSilently } = useAuth0();
  const [submissions, setSubmissions] = useState<PhraseAdminPagination>(
    createDefaultPhraseAdminPagination()
  );
  const [dataFetchingState, setDataFetchingState] = useState<
    "loading" | "done" | "error"
  >("loading");

  const router = useRouter();

  const fetchAllSubmissions = useCallback(async () => {
    setDataFetchingState("loading");
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-all/${router.query.page}`,
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
        setDataFetchingState("done");
        setSubmissions(data);
      } else {
        setDataFetchingState("error");
      }
    } catch (error) {
      setDataFetchingState("error");
    }
  }, [getAccessTokenSilently, router]);

  const renderSubmissions = useMemo(() => {
    if (dataFetchingState === "loading") {
      return <LoadingDiv />;
    }
    if (dataFetchingState === "error") {
      return <div>Failed to load phrases.</div>;
    }
    return submissions.content.map((submission) => {
      return (
        <div key={`div-${submission.id}`}>
          <hr key={`hr-${submission.id}`} className="my-0" />
          <AdminPhraseDiv key={`phrase-${submission.id}`} phrase={submission} />
        </div>
      );
    });
  }, [submissions, dataFetchingState]);

  useEffect(() => {
    if (router.isReady) {
      fetchAllSubmissions();
      return;
    }
  }, [fetchAllSubmissions, router.isReady]);

  return (
    <SubmissionsLayout>
      <div>
        <div className="mb-3">
          <h4>All Submissions</h4>
          <RefreshButton onClick={() => fetchAllSubmissions()} />
        </div>
        {renderSubmissions}
      </div>
    </SubmissionsLayout>
  );
}

export default AllSubmissions;
