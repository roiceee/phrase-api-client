import Phrase from "@/types/phrase";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useMemo, useState } from "react";
import PhraseDiv from "./phrase-div";

function PhraseList() {
  const [phraseList, setPhraseList] = useState<Phrase[]>([]);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  async function getPhraseList() {
    const token = await getAccessTokenSilently();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/get-all`,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    setPhraseList(data);
  }

  const phraseDivs = useMemo(() => { 
    return phraseList.map((phrase) => {
      return (
        <PhraseDiv key={phrase.id} phrase={phrase}/>
      );
    });
  }, [phraseList]);

  useEffect(() => {
    getPhraseList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>
    {isAuthenticated && phraseDivs}
    {!isAuthenticated && <div>Log in to see your phrases!</div>}
  </div>;
}

export default PhraseList;
