import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

interface SignInButton2Props {
    title: string;
}

function SignInButton2({title} : SignInButton2Props) {
    const { loginWithRedirect } = useAuth0();
    return ( 
        <Button
        variant="dark"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        {title}
      </Button>
     );
}

export default SignInButton2;