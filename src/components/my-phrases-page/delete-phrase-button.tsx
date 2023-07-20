import Phrase from "@/types/phrase/phrase";
import { MouseEventHandler, useState } from "react";
import { Button } from "react-bootstrap";

interface DeletePhraseButtonProps {
  phrase: Phrase;
  onDelete: (phrase: Phrase) => Promise<void>;
}

function DeletePhraseButton({ onDelete, phrase }: DeletePhraseButtonProps) {
  const [tapCount, setTapCount] = useState(0);

  const tapCountToggler = () => {
    setTapCount((prev) => prev + 1);
  };

  const deletePhrase = () => {
    if (tapCount === 2) {
      onDelete(phrase);
    }
  };

  const handleDelete = () => {
    tapCountToggler();
    deletePhrase();
  };

  return (
    <Button
      variant="outline-danger"
      onClick={(e) => {
        e.stopPropagation();
        handleDelete();
      }}
    >
      {tapCount === 0 && "Delete"}
      {tapCount === 1 && "Tap 2 more to delete"}
      {tapCount === 2 && "Tap 1 more to delete"}
      {tapCount === 3 && "Deleting..."}
    </Button>
  );
}

export default DeletePhraseButton;
