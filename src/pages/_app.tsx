import ServerDownAlert from "@/components/server-down-alert";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import "../assets/styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENTID!}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI!,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!,
      }}
    >
      <ServerDownAlert />
        <Component {...pageProps} />
    </Auth0Provider>
  );
}
