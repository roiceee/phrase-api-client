import { Button } from "react-bootstrap";

interface PendButtonProps {
  onClick?: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  className?: string;
  isSolid?: boolean;
}

function PendButton({
  onClick,
  disabled,
  className,
  isSolid,
}: PendButtonProps) {
  return (
    <Button
      variant={disabled? "outline-dark": isSolid ? "warning" : "outline-warning"}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Pend
    </Button>
  );
}

export default PendButton;
