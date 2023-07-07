import SubmissionsLayout from "@/components/layouts/admin/submissions-layout";
import UnauthorizedScreen from "@/components/unauthorized-screen";
import AdminContext from "@/contexts/admin-context/admin-context";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";



function AllSubmissions() {
  const {isAdmin} = useContext(AdminContext);

  const {getAccessTokenSilently} = useAuth0();
  
  const fetchAllSubmissions = async () => {
    const token = await getAccessTokenSilently();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-all`,
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
  };

  if (isAdmin === false) {
    return <UnauthorizedScreen/>
  }

  return (
    <SubmissionsLayout>
        <h4>All Submissions</h4>
    </SubmissionsLayout>
  );
}

export default AllSubmissions;
