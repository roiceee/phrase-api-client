import HeadWrapper from "@/components/gen-components/head-wrapper";
import LoadingDiv from "@/components/gen-components/loading-div";
import CustomPagination from "@/components/gen-components/custom-pagination/custom-pagination";
import PhraseSearchDiv from "@/components/gen-components/phrase-search/phrase-search-div";
import ReloadButton from "@/components/gen-components/reload-button";
import MainLayout from "@/components/layouts/main-layout";
import ClientSearchPagination from "@/types/client-search-pagination/client-search-pagination";
import createDefaultClientSearchPagination from "@/types/client-search-pagination/default-client-search-pagination";
import createDefaultSearchQuery from "@/types/search-query/default-search-query";
import SearchQuery from "@/types/search-query/search-query";
import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import descIcon from "public/images/descending.svg";
import searchIcon from "public/images/search.svg";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Button,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

function SearchPage() {
  const [searchQueryState, setSearchQueryState] = useState<SearchQuery>(
    createDefaultSearchQuery()
  );

  const [data, setData] = useState<ClientSearchPagination>(
    createDefaultClientSearchPagination()
  );

  const [fetchDataState, setFetchDataState] = useState<
    "loading" | "error" | "success"
  >("loading");

  const router = useRouter();

  const createSearchQueryString = useCallback(
    (
      query: any,
      type: any,
      searchBy: any,
      orderBy: any,
      qty: any,
      page: any
    ) => {
      return `query=${query}&type=${type}&searchBy=${searchBy}&orderBy=${orderBy}&qty=${qty}&page=${page}`;
    },
    []
  );

  const createLinkStringForPagination = useCallback(() => {
    const urlParams = router.query;
    return `/search?query=${urlParams.query}&type=${urlParams.type}&searchBy=${urlParams.searchBy}&orderBy=${urlParams.orderBy}&qty=${urlParams.qty}&page=`;
  }, [router.query]);

  const fetchData = useCallback(async () => {
    try {
      setFetchDataState("loading");
      const urlParams = router.query;
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL
        }/api/phrase/client-search?${createSearchQueryString(
          urlParams.query,
          urlParams.type,
          urlParams.searchBy,
          urlParams.orderBy,
          urlParams.qty,
          (urlParams.page as any) - 1
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setData(data);
        setFetchDataState("success");
      } else {
        setFetchDataState("error");
      }
    } catch {
      setFetchDataState("error");
    }
  }, [router.query, createSearchQueryString]);

  const search = useCallback(
    (searchQuery: SearchQuery) => {
      router.push(
        "/search?" +
          createSearchQueryString(
            searchQuery.query,
            searchQuery.type,
            searchQuery.searchBy,
            searchQuery.orderBy,
            searchQuery.qty,
            searchQuery.page
          )
      );
    },
    [router, createSearchQueryString]
  );

  const searchQueryTypeHandler = useCallback(
    (input: "joke" | "quote") => {
      setSearchQueryState((prev) => {
        const newState: SearchQuery = {
          ...prev,
          type: input,
        };
        search(newState);
        return newState;
      });
    },
    [search]
  );

  const searchQueryTextHandler = useCallback((input: string) => {
    setSearchQueryState((prev) => {
      return {
        ...prev,
        query: input.trim(),
      };
    });
  }, []);

  const searchQuerySearchByHandler = useCallback(
    (input: "phrase" | "author") => {
      setSearchQueryState((prev) => {
        const newState: SearchQuery = {
          ...prev,
          searchBy: input,
        };
        search(newState);
        return newState;
      });
    },
    [search]
  );

  const searchQueryOrderToggler = useCallback(() => {
    const flipOrder = searchQueryState.orderBy === "asc" ? "desc" : "asc";
    setSearchQueryState((prev) => {
      const newState: SearchQuery = {
        ...prev,
        orderBy: flipOrder,
      };
      search(newState);
      return newState;
    });
  }, [searchQueryState.orderBy, search]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (Object.keys(router.query).length === 0) {
      search(searchQueryState);
      return;
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, router.isReady, router.query, search]);

  const renderPhrases = useMemo(() => {
    return data.content.map((phrase, index) => {
      return (
        <div key={index}>
          <hr />
          <PhraseSearchDiv phrase={phrase} />
        </div>
      );
    });
  }, [data.content]);

  return (
    <MainLayout>
      <HeadWrapper title={"Search"} />
      <Container className="mt-4">
        <Row>
          <h2>Search</h2>
          <div>All request-ready phrases can be searched here.</div>
        </Row>

        <hr />

        <InputGroup className="mb-3">
          {/* search bar */}
          <Form.Control
            aria-label="Search Bar"
            placeholder="Enter input here"
            onChange={(e) => searchQueryTextHandler(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(searchQueryState);
              }
            }}
            value={searchQueryState.query}
            style={{ minWidth: "200px" }}
          />

          {/* search button */}
          <Button
            variant="primary"
            onClick={() => {
              search(searchQueryState);
            }}
          >
            <Image src={searchIcon} alt="search" />
          </Button>
        </InputGroup>

        <div className="d-flex gap-1 flex-wrap">
          {/* dropdown (search by) */}
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-gray"
              id="search-by-dropdown"
              className="text-dark"
            >
              Search by: <b>{_.capitalize(searchQueryState.searchBy)}</b>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Button}
                onClick={() => {
                  searchQuerySearchByHandler("phrase");
                }}
              >
                Phrase
              </Dropdown.Item>
              <Dropdown.Item
                as={Button}
                onClick={() => {
                  searchQuerySearchByHandler("author");
                }}
              >
                Author
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* dropdown (type) */}
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-gray"
              id="search-by-dropdown"
              className="text-dark"
            >
              Type: <b>{_.capitalize(searchQueryState.type)}</b>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Button}
                onClick={() => {
                  searchQueryTypeHandler("joke");
                }}
              >
                Joke
              </Dropdown.Item>
              <Dropdown.Item
                as={Button}
                onClick={() => {
                  searchQueryTypeHandler("quote");
                }}
              >
                Quote
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* asc or desc */}
          <Button
            variant="outline-gray"
            className="text-dark border border-1"
            onClick={searchQueryOrderToggler}
          >
            <Image
              src={descIcon}
              alt="order-by"
              height={24}
              width={24}
              className="me-1"
            />
            <b>{searchQueryState.orderBy === "asc" ? "Oldest" : "Newest"}</b>
          </Button>
        </div>
        <section>
          {fetchDataState === "loading" && <LoadingDiv className="my-5" />}
          {fetchDataState === "error" && (
            <Alert variant="danger" className="mt-3 gap-1">
              <span>Error fetching data.</span>
              <ReloadButton onClick={fetchData} className="ms-2" />
            </Alert>
          )}
          {fetchDataState === "success" && (
            <>
              {data.content.length > 0 && (
                <div>
                  <div className="mt-4">
                    <div>
                      <b>{`${data.totalElements} results. Page ${
                        data.number + 1
                      } of ${data.totalPages}`}</b>
                    </div>
                    {renderPhrases}
                  </div>
                  <div className="mt-4 d-flex justify-content-center">
                    {data.content.length > 0 && (
                      <CustomPagination
                        pagination={data}
                        clientSideRoute={createLinkStringForPagination()}
                      />
                    )}
                  </div>
                </div>
              )}
              {data.content.length === 0 && (
                <Alert variant="warning" className="mt-3 gap-1">
                  <span>Empty.</span>
                </Alert>
              )}
            </>
          )}
        </section>
      </Container>
    </MainLayout>
  );
}

export default SearchPage;
