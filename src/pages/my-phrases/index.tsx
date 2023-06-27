import HeadWrapper from "@/components/head-wrapper";
import MainLayout from "@/components/layouts/main-layout";
import LoadingDiv from "@/components/loading-div";
import AddPhraseDiv from "@/components/my-phrases-page/add-phrase-div";
import PhraseDiv from "@/components/my-phrases-page/phrase-div/phrase-div";
import SignInButton2 from "@/components/sign-in-button-2";
import Phrase from "@/types/phrase";
import { useAuth0 } from "@auth0/auth0-react";
import { set } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Row } from "react-bootstrap";

function MyPhrases() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isLoadingPhrases, setIsLoadingPhrases] = useState<boolean>(true);
  const [phrases, setPhrases] = useState<Phrase[]>([]);

  const addPhrase = useCallback(
    async (phrase: Phrase) => {
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
        } else if (res.status === 409) {
            alert(data.message);
        }
      } catch (error) {
        console.log(error);
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
        console.log(error);
      }
    },
    [getAccessTokenSilently, phrases]
  );

  const getPhrases = useCallback(async () => {
    try {
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
      setIsLoadingPhrases(false);
    } catch (error) {
      console.log(error);
    }
  }, [getAccessTokenSilently]);

  const phraseList = useMemo(() => {
    return phrases.map((phrase) => {
      return (
        <>
          <hr className="my-1" />
          <PhraseDiv key={phrase.id} phrase={phrase} onDelete={deletePhrase} />
        </>
      );
    });
  }, [phrases, deletePhrase]);

  useEffect(() => {
    getPhrases();
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
              {isLoadingPhrases && <LoadingDiv />}
              {!isLoadingPhrases && phraseList}

              <section className="border-top">
                <AddPhraseDiv onSubmit={addPhrase} />
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
