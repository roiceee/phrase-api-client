import CopyToClipboard from "@/components/api-keys-page-components/copy-to-clipboard";
import PhraseSearch from "@/types/phrase-search/phrase-search";

interface PhraseSearchDivProps {
  phrase: PhraseSearch;
}

function PhraseSearchDiv({ phrase }: PhraseSearchDivProps) {
  return (
    <div className="d-flex gap-2 justify-content-between align-items-center">
      <div>
        <div style={{ fontSize: "1.3rem" }}>{phrase.phrase}</div>
        <div>- {phrase.author}</div>
      </div>
      <div>
        <CopyToClipboard text={`${phrase.phrase}\n-${phrase.author}`} />
      </div>
    </div>
  );
}

export default PhraseSearchDiv;
