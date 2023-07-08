import Phrase from "@/types/phrase";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PhraseForm from "../gen-components/phrase-div/phrase-form";
import DeletePhraseButton from "./delete-phrase-button";
import style from "./phrase-div.module.scss";
import PhraseInfo from "../gen-components/phrase-div/phrase-info";
import PhraseDiv from "../gen-components/phrase-div/phrase-div";

interface UserPhraseDivProps {
  phrase: Phrase;
  onDelete: (phrase: Phrase) => Promise<void>;
  onUpdate: (phrase: Phrase) => Promise<boolean | undefined>;
}

function UserPhraseDiv({ phrase, onDelete, onUpdate }: UserPhraseDivProps) {
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
    <PhraseDiv phrase={phrase} onClick={hasClickedToggler}>
      <div>
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
    </PhraseDiv>
  );
}

export default UserPhraseDiv;
