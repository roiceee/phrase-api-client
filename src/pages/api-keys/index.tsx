import MainLayout from "@/components/layouts/main-layout";
import HeadWrapper from "@/components/gen-components/head-wrapper";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import ApiKeyComponent from "@/components/api-keys-page-components/api-key-component";
import { useAuth0 } from "@auth0/auth0-react";
import SignInButton2 from "@/components/gen-components/sign-in-button-2";

export default function ApiKeysIndex() {
  const auth = useAuth0();

  return (
    <MainLayout>
      <HeadWrapper title={"API Keys"} />
      <Container className="mt-3">
        <main>
          <article>
            <h2>API Keys</h2>
            <p>
              An API key is needed to access resources from our API. This key is
              private and is not meant to be shared with other people.
            </p>
            <Link
              href={
                "https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety#:~:text=Use%20Environment%20Variables%20in%20place,of%20the%20variable%20to%20OPENAI_API_KEY."
              }
              target="_blank"
            >
              Best Practices for API Key Safety.
            </Link>
          </article>
          <hr />
          <article>
            <h4>Your API Keys</h4>
            <p>
              As of now, Phrase API only allows <b>one</b> API key for each
              user. You can use the same API Key for all of your applications. Each API Key has an allowance of 100 requests per minute.
            </p>
          </article>
          {auth.isAuthenticated ? (
            <ApiKeyComponent />
          ) : (
           <SignInButton2 title="Sign in to access your API keys" />
          )}
        </main>
      </Container>
    </MainLayout>
  );
}
