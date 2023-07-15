import { Button } from "react-bootstrap";

interface ApproveButtonProps {
  onClick?: (() => void) | (() => Promise<void>);
  isSolid?: boolean;
  disabled?: boolean;
  className?: string;
}

function ApproveButton({
  onClick,
  disabled,
  className,
  isSolid,
}: ApproveButtonProps) {
  return (
    <Button
      variant={disabled? "outline-dark": isSolid ? "primary" : "outline-primary"}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Approve
    </Button>
  );
}

export default ApproveButton;
