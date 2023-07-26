import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import HeadWrapper from "./head-wrapper";

function UnauthorizedScreen() {
  const { back } = useRouter();

  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex flex-column text-center justify-content-center align-items-center"
    >
      <HeadWrapper title={"Unauthorized"}/>
      <h4>Phrase API</h4>

      <h1 className="mt-3">401 - Unauthorized</h1>
      <h5 className="mt-3">
        Sorry. You do not have permission to access this page.
      </h5>
      <div className="mt-3">
          <Button
            onClick={() => {
              back();
            }}
          >
            Go back.
          </Button>
      </div>
      <Link className="mt-4" href="mailto:jroicealdeza@gmail.com">Request to be an admin.</Link>
      
    </Container>
  );
}

export default UnauthorizedScreen;
