import { useCallback, useState } from "react";
import AddPhraseButton from "./add-phrase-button";
import PhraseForm from "./phrase-form";
import Phrase from "@/types/phrase";


interface AddPhraseDivProps {
    onSubmit: (phrase: Phrase) => Promise<boolean | undefined>;
}

function AddPhraseDiv({onSubmit}: AddPhraseDivProps) {
  const [isAddingPhrase, setIsAddingPhrase] = useState(false);

  const addPhraseToggler = useCallback(() => {
    if (isAddingPhrase) {
      setIsAddingPhrase(false);
      return;
    }
    setIsAddingPhrase(true);
  }, [isAddingPhrase]);
  
  const submitHandler = useCallback(async (phrase: Phrase) : Promise<boolean | undefined> => {
    const res = await onSubmit(phrase);
    if (!res) {
      return false;
    }
    setIsAddingPhrase(false);
    return res;
  }, [onSubmit])

  return (
    <div className="add-phrase-div mt-2">
      {!isAddingPhrase && <AddPhraseButton onClick={addPhraseToggler} />}
      {isAddingPhrase && (
          <PhraseForm operationType="Add" onSubmit={submitHandler} onCancel={addPhraseToggler}/>
      )}
    </div>
  );
}

export default AddPhraseDiv;
