import { Button } from "react-bootstrap";

interface RejectButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  isSolid?: boolean;
}

function RejectButton({
  onClick,
  disabled,
  className,
  isSolid,
}: RejectButtonProps) {
  return (
    <Button
      variant={disabled? "outline-dark": isSolid ? "danger" : "outline-danger"}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Reject
    </Button>
  );
}

export default RejectButton;
