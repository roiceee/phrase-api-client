import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";
import { Button } from "react-bootstrap";

export default function SignInButton() {
  const auth = useAuth0();

  const signIn = useCallback(() => {
    auth.loginWithRedirect();
  }, [auth]);
  return (
    <Button
      variant="outline-light"
      style={{ fontSize: "0.9rem" }}
      onClick={() => signIn()}
    >
      Sign in
    </Button>
  );
}
