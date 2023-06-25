import Phrase from "@/types/phrase";
import { truncate } from "lodash";

interface PhraseDivProps {
  phrase: Phrase;
}

function PhraseDiv({ phrase }: PhraseDivProps) {
  return (
    <div data-id={phrase.id} className="my-2 border-top p-1">
      <h4 className="phrase mb-1">
        &quot;{truncate(phrase.phrase, { length: 50, omission: "..." })}&quot;
      </h4>
      <div className="author">
        <b>Author: </b>
        {truncate(phrase.author, { length: 30, omission: "..." })}
      </div>
      <div className="type">
        <b>Type: </b>
        {phrase.type}
      </div>
      <div className="status">
        <b>Status: </b>
        {phrase.status}
      </div>
    </div>
  );
}

export default PhraseDiv;
