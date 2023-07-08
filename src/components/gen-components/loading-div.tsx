import { Spinner } from "react-bootstrap";

function LoadingDiv() {
  return (
    <div className="d-flex justify-content-center my-2">
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default LoadingDiv;
