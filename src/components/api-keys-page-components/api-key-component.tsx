import { useAuth0 } from "@auth0/auth0-react";
import { FormEvent, useCallback, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CopyToClipboard from "./copy-to-clipboard";


export default function ApiKeyComponent() {
  const [apiKeyState, setApiKeyState] = useState<string>("");
  const [showKeyState, setShowKeyState] = useState<string>("password");
  const {getAccessTokenSilently} = useAuth0();
  

  const showKeyStateToggler = useCallback(() => {
    if (showKeyState === "password") {
      setShowKeyState("text");
      return;
    }
    setShowKeyState("password");
  }, [showKeyState]);

  const getKey = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      const key = await fetch(`${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/apikey/get`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await key.text();
      setApiKeyState(data);
    } catch(e: any) {
        console.log(e);
    }
  }, [getAccessTokenSilently]);

  const deleteKey = useCallback(async () => {
   //delete api key on server 
   setApiKeyState("");
  }, []);

  return (
    <div>
      <Form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <div className="d-flex gap-1">
          <Form.Control
            style={{ maxWidth: "300px" }}
            type={showKeyState}
            placeholder="Generate your API Key"
            value={apiKeyState}
            readOnly
            autoComplete="false"
          />
          <CopyToClipboard text={apiKeyState} />
        </div>

        <div className="d-flex align-items-center gap-1 mt-1">
          <Form.Check
            type="checkbox"
            id="show-key"
            onChange={showKeyStateToggler}
          />
          <span style={{ fontSize: "0.8rem" }}>Show key</span>
        </div>
      </Form>

      <div className="mt-2 d-flex gap-2">
        {apiKeyState.length === 0 && (
          <Button variant="primary" onClick={getKey}>
            Generate key
          </Button>
        )}
        {apiKeyState && <Button variant="outline-danger" onClick={deleteKey}>Delete key</Button>}
      </div>
    </div>
  );
}
