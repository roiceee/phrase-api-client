import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function ServerDownAlert() {
  const [isServerDown, setIsServerDown] = useState(false);

  const checkServerConnection = useCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/check`
      );
      if (res.ok) {
        return;
      }
      setIsServerDown(true);
    } catch {
      setIsServerDown(true);
    }
  }, []);

  useEffect(() => {
    checkServerConnection();
  }, [checkServerConnection]);

  return (
    <>
      {isServerDown && (
        <Alert
          variant="danger"
          className="p-1 text-center my-0 rounded-0"
          style={{ zIndex: "9999" }}
        >
          Our resource server is down as of the moment.
        </Alert>
      )}
    </>
  );
}

export default ServerDownAlert;
