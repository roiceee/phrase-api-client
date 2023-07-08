import Link from "next/link";
import { useState } from "react";
import { Alert } from "react-bootstrap";

interface ErrorAlert {
  showAlert: boolean;
  closeHandler: () => void;
}

function ErrorAlert({ showAlert, closeHandler }: ErrorAlert) {

    const [show, setShow] = useState<boolean>(showAlert);


  return (
    <div className="position-fixed" style={{left: "50%", top: "80%", transform: "translate(-50%, 0)"}}>
      {showAlert && (
        <Alert variant="danger" onClose={closeHandler} dismissible>
          <Alert.Heading className="fs-5">Error occured! Try refreshing the page.</Alert.Heading>
          <div>
            If error persists, please{" "}
            <Link
              href={"https://github.com/roiceee/phrase-api-client/issues/new"}
              className="text-decoration-none text-danger"
              target={"_blank"}
            >
              <b>submit an issue.</b>
            </Link>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default ErrorAlert;
