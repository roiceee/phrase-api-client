import Phrase from "@/types/phrase";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PhraseForm from "../phrase-form";
import DeletePhraseButton from "./delete-phrase-button";
import style from "./phrase-div.module.scss";
import PhraseInfo from "./phrase-info";

interface PhraseDivProps {
  phrase: Phrase;
  onDelete: (phrase: Phrase) => Promise<void>;
  onUpdate: (phrase: Phrase) => Promise<boolean | undefined>;
}

function PhraseDiv({ phrase, onDelete, onUpdate }: PhraseDivProps) {
  const [hasClicked, setHasClicked] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateHandler = async (phrase: Phrase) => {
    const res = await onUpdate(phrase);
    if (res === false) {
      return false;
    }
    if (res === undefined) {
      return undefined;
    }
    setIsUpdating(false);
    return res;
  };

  const isUpdatingToggler = () => {
    setIsUpdating((prev) => !prev);
  };

  const hasClickedToggler = () => {
    if (isUpdating) {
      isUpdatingToggler();
    }
    setHasClicked((prev) => !prev);
  };

  return (
    <div
      className={`my-2 p-1 ${style.div}`}
      style={{ fontSize: "0.9rem" }}
      onClick={hasClickedToggler}
    >
      <PhraseInfo phrase={phrase} />
      {hasClicked && (
        <div className="mt-2">
          {!isUpdating && (
            <div className="d-flex gap-3">
              <Button
                variant="outline-warning"
                className="px-3"
                onClick={(e) => {
                  e.stopPropagation();
                  isUpdatingToggler();
                }}
              >
                Edit
              </Button>
              <DeletePhraseButton onDelete={onDelete} phrase={phrase} />
            </div>
          )}
          {isUpdating && (
            <PhraseForm
              operationType="Edit"
              phrase={phrase}
              onCancel={isUpdatingToggler}
              onSubmit={updateHandler}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default PhraseDiv;
