import { truncate } from "lodash";
import StatusSpan from "./status-span";
import PhraseCRUD from "@/types/phrase-crud/phrase-crud";
import Image from "next/image";
import user from "public/images/user.svg";
import typeImage from "public/images/type.svg";
import status from "public/images/status.svg";
import date from "public/images/date.svg";

interface PhraseInfoProps {
  phrase: PhraseCRUD;
}

function PhraseInfo({ phrase }: PhraseInfoProps) {
  return (
    <div>
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
      <div className="status d-flex align-items-center gap-1">
        <Image src={date} alt="status" width={16} height={16} />
        <span>
          <b>Time submitted: </b>
          {new Date(phrase.dateSubmitted).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default PhraseInfo;
