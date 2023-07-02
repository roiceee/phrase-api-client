import Link from "next/link";
import { useRouter } from "next/router";

function UnauthorizedScreen() {
  const { back } = useRouter();

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column text-center justify-content-center align-items-center"
    >
      <h4>Phrase API</h4>

      <h1 className="mt-3">401 - Unauthorized</h1>
      <h5 className="mt-3">
        Sorry. You do not have permission to access this page.
      </h5>
      <h5
        onClick={() => {
          back();
        }}
        className="text-primary"
      >
        Go back.
      </h5>
    </div>
  );
}

export default UnauthorizedScreen;
