import AdminPhraseDiv from "@/components/admin-page-components/admin-phrase-div";
import LoadingDiv from "@/components/gen-components/loading-div";
import RefreshButton from "@/components/gen-components/refresh-button";
import SubmissionsLayout from "@/components/layouts/admin/submissions-layout";
import createDefaultPhraseAdminPagination from "@/types/phrase-admin-pagination/default-phrase-admin-pagination";
import PhraseAdminPagination from "@/types/phrase-admin-pagination/phrase-admin-pagination";
import { useAuth0 } from "@auth0/auth0-react";
import _ from "lodash";
import Link from "next/link";
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

  const getCurrentPageNumber = (): any => {
    if (router.query.page === undefined) {
      return 1;
    }
    return router.query.page;
  };

  //page starts with 0, so we increment the path by 1 to avoid confusions to the end user. we also check if the page is undefined, in which case we set it to 1
  const fetchSubmissions = useCallback(async () => {
    setDataFetchingState("loading");
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL
        }/phrase-management/admin/get-all/${getCurrentPageNumber() - 1}`,
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

  //We use the spring boot pageable interface. Only 6 pagination divs are available at the time, with references to first and last pages.
  //We decrement the page number when requesting to the backend, so we have to increment it here to avoid confusion to the end user.

  const renderPagination = useMemo(() => {
    if (submissions.empty) {
      return;
    }
    const page = submissions.number + 1;
    const totalPages = submissions.totalPages;

    const pageNumbers = _.range(
      Math.max(0, page - 3),
      Math.min(totalPages, page + 3)
    );
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <Link
          className="page-link"
          key={number}
          href={`/admin/submissions/all/${number + 1}`}
        >
          {number + 1}
        </Link>
      );
    });
    return (
      <nav>
        <ul className="pagination gap-1">
          <li className="page-item">
            <Link className="page-link" href={`/admin/submissions/all/${1}`}>
              &lt;&lt;
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              href={`/admin/submissions/all/${page === 1 ? page : page - 1}`}
            >
              &lt;
            </Link>
          </li>
          {renderPageNumbers}
          <li className="page-item">
            <Link
              className="page-link"
              href={`/admin/submissions/all/${
                page === totalPages ? page : page + 1
              }`}
            >
              &gt;
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              href={`/admin/submissions/all/${totalPages}`}
            >
              &gt;&gt;
            </Link>
          </li>
        </ul>
      </nav>
    );
  }, [submissions.empty, submissions.totalPages, submissions.number]);

  const renderSubmissions = useMemo(() => {
    if (dataFetchingState === "loading") {
      return <LoadingDiv />;
    }
    if (dataFetchingState === "error") {
      return <div>Failed to load phrases.</div>;
    }
    if (submissions.empty) {
      return <div>Empty.</div>;
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
      fetchSubmissions();
      return;
    }
  }, [fetchSubmissions, router.isReady]);

  return (
    <SubmissionsLayout>
      <div>
        <div className="mb-3">
          <h4>All Submissions</h4>
          <RefreshButton onClick={() => fetchSubmissions()} />
        </div>
        <div>{renderSubmissions}</div>
        <div className="mt-5 d-flex justify-content-center">
          {renderPagination}
        </div>
      </div>
    </SubmissionsLayout>
  );
}

export default AllSubmissions;
