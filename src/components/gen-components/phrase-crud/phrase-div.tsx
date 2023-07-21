import PhraseCRUD from "@/types/phrase-crud/phrase-crud";
import style from "./phrase-div.module.scss";
import PhraseInfo from "./phrase-info";


interface PhraseDivProps {
  onClick?: () => void;
  children?: React.ReactNode;
  phrase: PhraseCRUD;
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
