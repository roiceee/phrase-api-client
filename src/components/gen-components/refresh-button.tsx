import { useState } from "react";
import { Button } from "react-bootstrap";

interface RefreshButtonProps {
  onClick?: () => void;
}

function RefreshButton({ onClick }: RefreshButtonProps) {
  const [onHover, setOnHover] = useState(false);

  const onMouseEnter = () => {
    setOnHover(true);
  };

  const onMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <Button
      variant="outline-dark d-flex align-items-center gap-1"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke={onHover ? "#fff" : "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
      </svg>
      <span>Refresh</span>
    </Button>
  );
}

export default RefreshButton;
