import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import "../assets/styles/app.scss";
import details from "../../auth0Details.json";


export default function App({ Component, pageProps }: AppProps) {


  return (
    <Auth0Provider
      domain={details.domain}
      clientId={details.clientId}
      authorizationParams={{
        redirect_uri: details.redirect_uri,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
