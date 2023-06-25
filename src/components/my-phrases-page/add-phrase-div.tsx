import { useCallback, useState } from "react";
import AddPhraseButton from "./add-phrase-button";
import PhraseForm from "./phrase-form";
import Phrase from "@/types/phrase";


interface AddPhraseDivProps {
    onSubmit: (phrase: Phrase) => void;
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
  
  const submitHandler = useCallback((phrase: Phrase) => {
    onSubmit(phrase);
    setIsAddingPhrase(false);
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
