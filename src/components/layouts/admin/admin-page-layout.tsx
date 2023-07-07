import { useContext, useEffect, useState } from "react";
import AdminSideNav from "../../admin-page-components/admin-side-nav";
import LayoutWithSideNav from "../split-layout";
import LoadingScreen from "@/components/loading-screen";
import UnauthorizedScreen from "@/components/unauthorized-screen";
import { useAuth0 } from "@auth0/auth0-react";

interface AdminPageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function AdminPageLayout({ children }: AdminPageLayoutProps) {
  const { isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const checkIfAdmin = async () => {
    const idToken = await getIdTokenClaims();

    if (idToken === undefined) {
      return;
    }

    const array = idToken["https://phraseapi.vercel.app/roles"];

    if (array[0] === "admin") {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      checkIfAdmin();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated || !isAdmin) {
    return <UnauthorizedScreen />;
  }

  return (
    <LayoutWithSideNav sideNav={<AdminSideNav />}>{children}</LayoutWithSideNav>
  );
}

export default AdminPageLayout;
