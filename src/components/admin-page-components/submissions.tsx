import createDefaultPhraseAdminPagination from "@/types/phrase-admin-pagination/default-phrase-admin-pagination";
import PhraseAdminPagination from "@/types/phrase-admin-pagination/phrase-admin-pagination";
import { useAuth0 } from "@auth0/auth0-react";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import LoadingDiv from "../gen-components/loading-div";
import RefreshButton from "../gen-components/refresh-button";
import SubmissionsLayout from "../layouts/admin/submissions-layout";
import AdminPhraseDiv from "./admin-phrase-div/admin-phrase-div";

interface SubmissionsProps {
  fetchUrl: string;
  clientSideRoute: string;
  title: string;
}

function Submissions({ fetchUrl, clientSideRoute, title }: SubmissionsProps) {
  const { getAccessTokenSilently } = useAuth0();
  const [submissions, setSubmissions] = useState<PhraseAdminPagination>(
    createDefaultPhraseAdminPagination()
  );
  const [dataFetchingState, setDataFetchingState] = useState<
    "loading" | "done" | "error"
  >("loading");

  const router = useRouter();

  const getCurrentPageNumber = useCallback((): any => {
    if (router.query.page === undefined) {
      return 1;
    }
    return router.query.page;
  }, [router]);

  //page starts with 0, so we increment the path by 1 to avoid confusions to the end user. we also check if the page is undefined, in which case we set it to 1
  const fetchSubmissions = useCallback(async () => {
    setDataFetchingState("loading");
    const currentPageNumber = getCurrentPageNumber() - 1;

    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${fetchUrl}/${currentPageNumber}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      });
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
  }, [getAccessTokenSilently, getCurrentPageNumber, fetchUrl]);

  const refreshHandler = useCallback(() => {
    router.replace(`${clientSideRoute}/1`);
    fetchSubmissions();
  }, [fetchSubmissions, clientSideRoute, router]);

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
          href={`${clientSideRoute}/${number + 1}`}
        >
          {number + 1}
        </Link>
      );
    });
    return (
      <nav>
        <ul className="pagination gap-1">
          <li className="page-item">
            <Link className="page-link" href={`${clientSideRoute}/${1}`}>
              &lt;&lt;
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              href={`${clientSideRoute}/${page === 1 ? page : page - 1}`}
            >
              &lt;
            </Link>
          </li>
          {renderPageNumbers}
          <li className="page-item">
            <Link
              className="page-link"
              href={`${clientSideRoute}/${
                page === totalPages ? page : page + 1
              }`}
            >
              &gt;
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              href={`${clientSideRoute}/${totalPages}`}
            >
              &gt;&gt;
            </Link>
          </li>
        </ul>
      </nav>
    );
  }, [
    submissions.empty,
    submissions.totalPages,
    submissions.number,
    clientSideRoute,
  ]);

  const renderSubmissions = useMemo(() => {
    if (dataFetchingState === "loading") {
      return <LoadingDiv className="my-5"/>;
    }
    if (dataFetchingState === "error") {
      return (
        <div>
          Failed to load phrases.{" "}
          <Button variant="outline-dark" onClick={refreshHandler}>
            Reload
          </Button>
        </div>
      );
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
  }, [submissions, dataFetchingState, refreshHandler]);

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
          <h4>{title}</h4>
          {dataFetchingState === "done" && (
            <RefreshButton onClick={refreshHandler} />
          )}
        </div>
        <div>{renderSubmissions}</div>
        <div className="mt-5 d-flex justify-content-center">
          {renderPagination}
        </div>
      </div>
    </SubmissionsLayout>
  );
}

export default Submissions;
