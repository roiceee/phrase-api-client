import HeadWrapper from "@/components/head-wrapper";
import MainLayout from "@/components/layouts/main-layout";
import LoadingDiv from "@/components/loading-div";
import AddPhraseDiv from "@/components/my-phrases-page/add-phrase-div";
import UserPhraseDiv from "@/components/my-phrases-page/phrase-div/user-phrase-div";
import SignInButton2 from "@/components/sign-in-button-2";
import Phrase from "@/types/phrase";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

function MyPhrases() {
  const { isAuthenticated, getAccessTokenSilently, getIdTokenClaims } =
    useAuth0();
  const [isLoadingPhrases, setIsLoadingPhrases] = useState<
    "loading" | "failed" | "ok"
  >("loading");
  const [maxPhrases, setMaxPhrases] = useState<number | "---">("---");
  const [phrases, setPhrases] = useState<Phrase[]>([]);

  const addPhrase = useCallback(
    async (phrase: Phrase): Promise<boolean | undefined> => {
      phrase.id = null;
      try {
        const token = await getAccessTokenSilently();
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/user/add`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(phrase),
          }
        );
        const data = await res.json();
        if (res.ok) {
          setPhrases([...phrases, data]);
        }
        if (res.status === 409) {
          return false;
        }
        return true;
      } catch (error) {
        alert("Something went wrong. Please try again later.");
        return undefined;
      }
    },
    [getAccessTokenSilently, phrases]
  );

  const updatePhrase = useCallback(
    async (phrase: Phrase): Promise<boolean | undefined> => {
      try {
        const token = await getAccessTokenSilently();
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/user/update`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(phrase),
          }
        );
        const data = await res.json();
        if (res.ok) {
          const newPhrases = phrases.map((p) => {
            if (p.id === data.id) {
              return data;
            }
            return p;
          });
          setPhrases(newPhrases);
        }
        if (res.status === 409) {
          return false;
        }
        return true;
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again later.");
        return undefined;
      }
    },
    [getAccessTokenSilently, phrases]
  );

  const deletePhrase = useCallback(
    async (phrase: Phrase) => {
      try {
        const token = await getAccessTokenSilently();
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/user/delete`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: phrase.id }),
          }
        );
        if (res.ok) {
          const newPhrases = phrases.filter((p) => p.id !== phrase.id);
          setPhrases(newPhrases);
        }
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      }
    },
    [getAccessTokenSilently, phrases]
  );

  const getPhrases = useCallback(async () => {
    try {
      setIsLoadingPhrases("loading");
      const token = await getAccessTokenSilently();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/user/get-all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setPhrases(data);
      setIsLoadingPhrases("ok");
    } catch (error) {
      setIsLoadingPhrases("failed");
    }
  }, [getAccessTokenSilently]);

  const getMaxPhrases = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/user/get-metadata`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setMaxPhrases(data.maxPhrases);
    } catch (error) {}
  }, [getAccessTokenSilently]);

  const phraseList = useMemo(() => {
    return phrases.map((phrase, index) => {
      return (
        <div key={index}>
          <hr className="my-1" />
          <UserPhraseDiv
            phrase={phrase}
            onDelete={deletePhrase}
            onUpdate={updatePhrase}
          />
        </div>
      );
    });
  }, [phrases, deletePhrase, updatePhrase]);

  useEffect(() => {
    getPhrases();
    getMaxPhrases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <HeadWrapper title="My Phrases" />
      <Container className="my-3">
        <Row>
          <h2>My Phrases</h2>
          <p>
            You can add your own phrases to our API Collection! We review your
            submissions before adding it to our API to ensure the
            appropriateness of data.
          </p>
        </Row>

        <Row>
          <h3>Phrases</h3>
          {isAuthenticated && (
            <>
              {isLoadingPhrases === "loading" && <LoadingDiv />}
              {isLoadingPhrases === "failed" && (
                <div className="d-flex align-items-center gap-2 my-2">
                  <span>Failed to load phrases.</span>
                  <Button
                    variant="outline-primary"
                    onClick={getPhrases}
                    size="sm"
                  >
                    Try again
                  </Button>
                </div>
              )}
              {isLoadingPhrases === "ok" && (
                <>
                  <div>
                    Phrase Limit: 
                    {` ${
                      maxPhrases === "---" ? maxPhrases : phrases.length
                    }/${maxPhrases}`}
                  </div>
                  {phraseList}
                </>
              )}

              <section className="border-top">
                <AddPhraseDiv
                  onSubmit={addPhrase}
                  disabled={phrases.length === maxPhrases}
                />
              </section>
            </>
          )}
          {!isAuthenticated && (
            <>
              <p>
                You need to be logged in to add your own phrases to our API
                Collection.
              </p>
              <div>
                <SignInButton2 title="Sign In to add phrases" />
              </div>
            </>
          )}
        </Row>
      </Container>
    </MainLayout>
  );
}

export default MyPhrases;
