import { Spinner } from "react-bootstrap";

interface LoadingDivProps {
  className?: string;
}

function LoadingDiv({ className }: LoadingDivProps) {
  return (
    <div className={`d-flex justify-content-center my-2 ${className}`}>
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default LoadingDiv;
