import Phrase from "@/types/phrase";
import { truncate } from "lodash";
import user from "public/images/user.svg";
import Image from "next/image";
import typeImage from "public/images/type.svg";
import status from "public/images/status.svg";
import StatusSpan from "../status-span";
import style from "./phrase-div.module.scss";
import { useState } from "react";
import { Button } from "react-bootstrap";
import DeletePhraseButton from "./delete-phrase-button";
import PhraseForm from "../phrase-form";
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
