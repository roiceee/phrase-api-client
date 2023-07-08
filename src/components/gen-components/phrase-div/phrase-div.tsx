import Phrase from "@/types/phrase";
import style from "./phrase-div.module.scss";
import PhraseInfo from "./phrase-info";

interface PhraseDivProps {
  onClick?: () => void;
  children?: React.ReactNode;
  phrase: Phrase;
}

function PhraseDiv({
  onClick,
  children,
  phrase,
}: PhraseDivProps) {
  return (
    <div
      className={`my-2 p-1 ${style.div}`}
      style={{ fontSize: "0.9rem" }}
      onClick={onClick}
    >
      <PhraseInfo phrase={phrase} />
      {children}
    </div>
  );
}

export default PhraseDiv;
