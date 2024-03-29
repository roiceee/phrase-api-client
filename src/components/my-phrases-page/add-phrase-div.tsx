import { useCallback, useState } from "react";
import AddPhraseButton from "./add-phrase-button";
import PhraseForm from "../gen-components/phrase-crud/phrase-form";
import PhraseCRUD from "@/types/phrase-crud/phrase-crud";


interface AddPhraseDivProps {
    onSubmit: (phrase: PhraseCRUD) => Promise<boolean | undefined>;
    disabled?: boolean;
}

function AddPhraseDiv({onSubmit, disabled}: AddPhraseDivProps) {
  const [isAddingPhrase, setIsAddingPhrase] = useState(false);

  const addPhraseToggler = useCallback(() => {
    if (isAddingPhrase) {
      setIsAddingPhrase(false);
      return;
    }
    setIsAddingPhrase(true);
  }, [isAddingPhrase]);
  
  const submitHandler = useCallback(async (phrase: PhraseCRUD) : Promise<boolean | undefined> => {
    const res = await onSubmit(phrase);
    if (res === false) {
      return false;
    }
    if (res === undefined) {
      return undefined;
    }
    setIsAddingPhrase(false);
    return res;
  }, [onSubmit])

  return (
    <div className="add-phrase-div mt-2">
      {!isAddingPhrase && <AddPhraseButton onClick={addPhraseToggler} disabled={disabled}/>}
      {isAddingPhrase && (
          <PhraseForm operationType="Add" onSubmit={submitHandler} onCancel={addPhraseToggler}/>
      )}
    </div>
  );
}

export default AddPhraseDiv;
