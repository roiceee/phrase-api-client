import APIPageLayout from "@/components/layouts/api-page-layout";
import HeadWrapper from "@/components/head-wrapper";
import Image from "next/image";
import image from "public/images/request-overview.png";
import Link from "next/link";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function APIIndex() {
  return (
    <APIPageLayout>
      <HeadWrapper title={"API Overview"} />
      <Container>
        <Row>
          <Col>
            <main>
              <h2 id="overview-heading">Overview</h2>
              <hr />
              <article>
                <p>
                  Our REST API endpoints let you request phrase resources that
                  you can render to your client applications. Here is a high
                  level illustration on how client fetches data from the server:
                </p>

                <figure
                  style={{
                    position: "relative",
                    height: "400px",
                    width: "100%",
                  }}
                >
                  <Image
                    src={image}
                    alt="Simple explanation: Fetching data"
                    fill
                    style={{ objectFit: "contain" }}
                    priority={false}
                    sizes=""
                    placeholder="blur"
                  />
                </figure>

                <p>
                  Phrase API has a server and database that allows the client
                  (your frontend application, for example) to fetch resources.
                  The server sends data in a structured format (like JSON). The
                  client is then responsible for rendering the data through the
                  Document Object Model (DOM).
                </p>
                <p>
                  For starters, you can take a look at javascript{" "}
                  <Link
                    target={"_blank"}
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
                  >
                    Fetch API.
                  </Link>
                </p>
              </article>
              <hr />
              <article>
                <h4 id="api-keys-heading">API Keys</h4>
                <p>
                  Phrase API needs to secure its endpoints to prevent
                  unauthorized access. With this, anyone that aims to access our
                  API must provide an API key. The API key is a unique token or
                  identifier that authenticates requests to communicate with
                  another application.
                </p>

                <div className="my-3">
                  <Link href={"/api-keys"}>
                    <Button variant="dark">My API Keys</Button>
                  </Link>
                </div>
                <h6>
                  <b>Important: Keep your API keys private. </b>
                  <Link
                    href={
                      "https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety#:~:text=Use%20Environment%20Variables%20in%20place,of%20the%20variable%20to%20OPENAI_API_KEY."
                    }
                    target="_blank"
                  >
                    Best Practices for API Key Safety.
                  </Link>
                </h6>
              </article>
            </main>
          </Col>
        </Row>
      </Container>
    </APIPageLayout>
  );
}
