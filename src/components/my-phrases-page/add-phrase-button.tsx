import { Button } from "react-bootstrap";

interface AddPhraseButtonProps {
  onClick?: () => void;
}

function AddPhraseButton({onClick}: AddPhraseButtonProps) {
  return (
    <Button variant="outline-white" onClick={onClick}>
      <span className="d-flex justify-content-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span className="fw-semibold">Add Phrase</span>
      </span>
    </Button>
  );
}

export default AddPhraseButton;
