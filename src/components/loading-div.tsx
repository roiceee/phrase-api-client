import { Spinner } from "react-bootstrap";

function LoadingDiv() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default LoadingDiv;
