import Phrase from "@/types/phrase";
import { truncate } from "lodash";
import user from "public/images/user.svg";
import Image from "next/image";
import typeImage from "public/images/type.svg";
import status from "public/images/status.svg";
import StatusSpan from "./status-span";

interface PhraseDivProps {
  phrase: Phrase;
}

function PhraseDiv({ phrase }: PhraseDivProps) {
  return (
    <div data-id={phrase.id} className="my-2 border-top p-1" style={{fontSize: "0.9rem"}}>
      <h4 className="phrase mb-1">
        &quot;{truncate(phrase.phrase, { length: 50, omission: "..." })}&quot;
      </h4>
      <div className="author d-flex align-items-center gap-1">
        <Image src={user} alt="user" width={16} height={16} />

        <span>
          <b>Author: </b>
          {truncate(phrase.author, { length: 30, omission: "..." })}
        </span>
      </div>
      <div className="type d-flex align-items-center gap-1">
        <Image src={typeImage} alt="type" width={16} height={16} />
        <span>
          <b>Type: </b>
          {phrase.type}
        </span>
      </div>
      <div className="status d-flex align-items-center gap-1">
        <Image src={status} alt="status" width={16} height={16} />
        <span>
          <b>Status: </b>
          <StatusSpan status={phrase.status} />
        </span>
      </div>
    </div>
  );
}

export default PhraseDiv;
