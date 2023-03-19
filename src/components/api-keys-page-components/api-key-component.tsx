import { useAuth0 } from "@auth0/auth0-react";
import { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import ErrorAlert from "../error-alert";
import CopyToClipboard from "./copy-to-clipboard";

export default function ApiKeyComponent() {
  const [apiKeyState, setApiKeyState] = useState<string>("");
  const [showKeyState, setShowKeyState] = useState<string>("password");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActionLoading, setIsActionLoading] = useState<boolean>(false);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/apikey/get`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 404) {
        setApiKeyState("");
      } else {
        const data = await res.json();
        setApiKeyState(data.apiKey);
      }
      setIsLoading(false);
    } catch (e: any) {
      setApiKeyState("");
    }
  }, [getAccessTokenSilently]);

  const createKey = useCallback(async () => {
    setIsActionLoading(true);
    try {
      const accessToken = await getAccessTokenSilently();
      const key = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/apikey/create`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await key.json();
      setApiKeyState(data.apiKey);
    } catch (e: any) {
      console.log(e);
    }
    setIsActionLoading(false);
  }, [getAccessTokenSilently]);

  const deleteKey = useCallback(async () => {
    setIsActionLoading(true);
    try {
      const accessToken = await getAccessTokenSilently();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/apikey/delete`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 200) {
        setApiKeyState("");
      }
    } catch {

    }
    setIsActionLoading(false);
  }, [getAccessTokenSilently]);

  useEffect(() => {
    if (isAuthenticated) {
      getKey();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <>
    {isLoading && <Spinner/>}
      {!isLoading && (
        <div>
          <Form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
          >
            <div className="d-flex gap-1">
              <Form.Control
                style={{ maxWidth: "350px" }}
                type={showKeyState}
                placeholder="Generate API Key"
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
              <Button variant="primary" onClick={createKey}>
                {isActionLoading ? <Spinner size="sm" /> : "Generate Key"}
              </Button>
            )}
            {apiKeyState && (
              <Button variant="outline-danger" onClick={deleteKey}>
                {isActionLoading ? <Spinner size="sm" /> : "Delete Key"}
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
