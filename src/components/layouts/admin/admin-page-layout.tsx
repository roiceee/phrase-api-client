import { useContext, useEffect, useState } from "react";
import AdminSideNav from "../../admin-page-components/admin-side-nav";
import LayoutWithSideNav from "../split-layout";
import LoadingScreen from "@/components/gen-components/loading-screen";
import UnauthorizedScreen from "@/components/gen-components/unauthorized-screen";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

interface AdminPageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function AdminPageLayout({ children }: AdminPageLayoutProps) {
  const { isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const [isFirstLoad, setFirstLoad] = useState(false);
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
    setTimeout(() => {
      setFirstLoad(true);
    }, 1000);
    return <LoadingScreen />;
  }

  if (!isAdmin) {
    return <UnauthorizedScreen />;
  }

  return (
    <LayoutWithSideNav sideNav={<AdminSideNav />}>{children}</LayoutWithSideNav>
  );
}

export default AdminPageLayout;
