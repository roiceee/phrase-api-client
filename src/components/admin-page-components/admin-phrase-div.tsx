import Phrase from "@/types/phrase";
import PhraseDiv from "../gen-components/phrase-div/phrase-div";
import { useState } from "react";

interface AdminPhraseDivProps {
  phrase: Phrase;
}

function AdminPhraseDiv({ phrase }: AdminPhraseDivProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onDivClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <PhraseDiv phrase={phrase} onClick={onDivClick}>
      {isClicked && <div>{phrase.id}dffgdf</div>}
    </PhraseDiv>
  );
}

export default AdminPhraseDiv;
