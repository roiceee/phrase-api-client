import Phrase from "@/types/phrase";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

interface PhraseFormProps {
  operationType: string;
  phrase?: Phrase;
  onSubmit: (phrase: Phrase) => void;
  onCancel: () => void;
}

function PhraseForm({
  operationType,
  onSubmit,
  phrase,
  onCancel,
}: PhraseFormProps) {
  const [phraseValue, setPhraseValue] = useState<Phrase>({
    id: null,
    phrase: "",
    author: "",
    type: "joke",
    status: null,
  });

  const onPhraseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhraseValue((prev) => {
      return {
        ...prev,
        phrase: e.target.value,
      };
    });
  };

  const onAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhraseValue((prev) => {
      return {
        ...prev,
        author: e.target.value,
      };
    });
  };

  const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPhraseValue((prev) => {
      return {
        ...prev,
        type: e.target.value,
      };
    });
  };

  const checkEmpty = () => {
    return phraseValue.phrase.trim() === "" || phraseValue.author.trim() === "";
  };

  const checkLength = () => {
    return phraseValue.phrase.length > 200 || phraseValue.author.length > 50;
  };

  const submitHandler = () => {
    if (checkEmpty()) {
      alert("Phrase or author cannot be empty");
      return;
    }
    if (checkLength()) {
      alert("Phrase or author is too long");
      return;
    }
    onSubmit(phraseValue);
  };

  useEffect(() => {
    if (!phrase) {
      return;
    }
    setPhraseValue(phrase);
  }, [phrase]);

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{ maxWidth: "600px" }}
        className="border abnf p-3 rounded"
      >
        <input
          type="hidden"
          value={phraseValue.id !== null ? phraseValue.id : undefined}
        />

        <Form.Group className="mb-2" controlId="phrase">
          <Form.Label>
            <b>{operationType} Phrase</b>
          </Form.Label>
          <Form.Control
            as={"textarea"}
            placeholder="Enter phrase here"
            value={phraseValue?.phrase}
            onChange={onPhraseChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author here"
            value={phraseValue?.author}
            onChange={onAuthorChange}
          />
        </Form.Group>
        <Form.Group className="mb-2 w-50" controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Select
            aria-label="Phrase type"
            value={phraseValue.type}
            onChange={onTypeChange}
          >
            <option value="joke">Joke</option>
            <option value="quote">Quote</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex gap-2">
          <Button variant="gray" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={submitHandler}>
            {operationType}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PhraseForm;
