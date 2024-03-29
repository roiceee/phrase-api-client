import { useAuth0 } from "@auth0/auth0-react";

import Footer from "../gen-components/footer";
import LoadingScreen from "../gen-components/loading-screen";
import NavigationBar from "../gen-components/navbar";

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
