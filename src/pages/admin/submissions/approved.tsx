import SubmissionsLayout from "@/components/layouts/admin/submissions-layout";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect } from "react";

function ApprovedSubmissions() {
  const { getAccessTokenSilently } = useAuth0();

  const fetchApprovedSubmissions = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-approved`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("failed");
    }
  }, [getAccessTokenSilently]);

  useEffect(() => {
    fetchApprovedSubmissions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SubmissionsLayout>
      <h4>Approved Submissions</h4>
    </SubmissionsLayout>
  );
}

export default ApprovedSubmissions;
