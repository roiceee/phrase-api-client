import { Button } from "react-bootstrap";

interface CancelButtonProps {
  onClick?: (() => void) | (() => Promise<void>);
}

function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <Button variant="gray" onClick={onClick}>
      Cancel
    </Button>
  );
}

export default CancelButton;
