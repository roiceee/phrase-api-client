import createDefaultPhraseAdminPagination from "@/types/phrase-admin-pagination/default-phrase-admin-pagination";
import PhraseAdminPagination from "@/types/phrase-admin-pagination/phrase-admin-pagination";
import { useAuth0 } from "@auth0/auth0-react";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Button, Dropdown, DropdownButton } from "react-bootstrap";
import LoadingDiv from "../gen-components/loading-div";
import RefreshButton from "../gen-components/refresh-button";
import SubmissionsLayout from "../layouts/admin/submissions-layout";
import AdminPhraseDiv from "./admin-phrase-div/admin-phrase-div";
import sortImage from "public/images/sort.svg";
import Image from "next/image";
import CustomPagination from "../gen-components/custom-pagination/custom-pagination";
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
  const [sortState, setSortState] = useState<"dateSubmitted" | "A-Z">(
    "dateSubmitted"
  );

  const onSortClick = useCallback((state: "dateSubmitted" | "A-Z") => {
    setSortState(state);
  }, []);

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
      const response = await fetch(
        `${fetchUrl}/${currentPageNumber}?sortBy=${sortState}`,
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
  }, [getAccessTokenSilently, getCurrentPageNumber, fetchUrl, sortState]);

  const refreshHandler = useCallback(() => {
    router.replace(`${clientSideRoute}/1`);
    fetchSubmissions();
  }, [fetchSubmissions, clientSideRoute, router]);

  //We use the spring boot pageable interface. Only 6 pagination divs are available at the time, with references to first and last pages.
  //We decrement the page number when requesting to the backend, so we have to increment it here to avoid confusion to the end user.

  const renderSubmissions = useMemo(() => {
    if (submissions.empty) {
      return <div>Empty.</div>;
    }
    return submissions.content.map((submission) => {
      return (
        <div key={`div-${submission.id}`}>
          <hr className="my-0" />
          <AdminPhraseDiv phrase={submission} />
        </div>
      );
    });
  }, [submissions]);

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
            <div className="d-flex gap-2 flex-wrap">
              <RefreshButton onClick={refreshHandler} />
              <Dropdown>
                <Dropdown.Toggle variant="gray">
                  <Image
                    src={sortImage}
                    alt="sort"
                    height={24}
                    width={24}
                    className="me-2"
                  />
                  {sortState === "dateSubmitted" ? "Time submitted" : sortState}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => onSortClick("dateSubmitted")}>
                    Time Submitted
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => onSortClick("A-Z")}>
                    Alphabetical (A-Z)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
        <section>
          {dataFetchingState === "loading" && <LoadingDiv className="my-5" />}
          {dataFetchingState === "error" && (
            <div className="text-danger">
              Failed to load phrases.{" "}
              <Button variant="outline-dark" onClick={refreshHandler}>
                Reload
              </Button>
            </div>
          )}
          {dataFetchingState === "done" && renderSubmissions}
        </section>
        <section className="mt-5 d-flex justify-content-center">
          {!submissions.empty && (
            <CustomPagination
              pagination={submissions}
              clientSideRoute={clientSideRoute}
            />
          )}
        </section>
      </div>
    </SubmissionsLayout>
  );
}

export default Submissions;
