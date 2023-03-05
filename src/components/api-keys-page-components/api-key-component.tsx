import { FormEvent, useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CopyToClipboard from "./copy-to-clipboard";


export default function ApiKeyComponent() {
  const [apiKeyState, setApiKeyState] = useState<string>("asdfasdfaasdsdfsADF");
  const [showKeyState, setShowKeyState] = useState<string>("password");

  const showKeyStateToggler = useCallback(() => {
    if (showKeyState === "password") {
      setShowKeyState("text");
      return;
    }
    setShowKeyState("password");
  }, [showKeyState]);

 

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
         <CopyToClipboard text={apiKeyState}/>
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
        {!apiKeyState && <Button variant="primary">Generate key</Button>}
        {apiKeyState && <Button variant="outline-danger">Delete key</Button>}
      </div>
    </div>
  );
}
