import APIBodyLayout from "@/components/layouts/api-body-layout";
import HeadWrapper from "@/util-components/head-wrapper";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function APIIndex() {
  return (
    <APIBodyLayout>
      <HeadWrapper title={"API"} />
      <Container>
        <article>
          <h1>Overview</h1>
          <p>
            Our REST API endpoints let you request phrase resources that you can
            render to your client applications.
          </p>
          <h6>
            Here is a high level illustration on how client fetches data from
            the server.
          </h6>
          <div style={{position: "relative", maxHeight: "600px", maxWidth: "800px"}}>
            <Image
              src={"/images/request-overview.png"}
              fill
              alt="Fetch example"
            />
          </div>

          <p>
            For starters, you can take a look at javascript{" "}
            <Link
              target={"_blank"}
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
            >
              fetch api
            </Link>
            .
          </p>
        </article>
      </Container>
    </APIBodyLayout>
  );
}
