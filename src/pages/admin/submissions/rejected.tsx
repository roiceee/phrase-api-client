import SubmissionsLayout from "@/components/layouts/admin/submissions-layout";
import LoadingScreen from "@/components/gen-components/loading-screen";
import UnauthorizedScreen from "@/components/gen-components/unauthorized-screen";

import { useContext } from "react";

function RejectedSubmissions() {
 
  return (
    <SubmissionsLayout>
      <h4>Rejected Submissions</h4>
    </SubmissionsLayout>
  );
}

export default RejectedSubmissions;
