import { useAuth0 } from "@auth0/auth0-react";

import Footer from "../footer";
import LoadingScreen from "../loading-screen";
import NavigationBar from "../navbar";
import { useContext } from "react";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: MainLayoutProps) {
  const {isLoading} = useAuth0();

  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
