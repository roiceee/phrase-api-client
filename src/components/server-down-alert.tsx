import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function ServerDownAlert() {
  const [isServerDown, setIsServerDown] = useState(false);

  const checkServerConnection = useCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/check`
      );

      setIsServerDown(false);
    } catch {
      setIsServerDown(true);
    }
  }, []);

  useEffect(() => {
    checkServerConnection();
    setInterval(async () => {
      checkServerConnection();
    }, 20000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
