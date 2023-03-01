import APIBodyLayout from "@/components/layouts/api-body-layout";
import HeadWrapper from "@/util-components/head-wrapper";
import { Container } from "react-bootstrap";

export default function APIIndex() {
  return (
    <APIBodyLayout>
      <HeadWrapper title={"API"} />
      <Container>
        <article>
          <h1>Overview</h1>
        </article>
      </Container>
    </APIBodyLayout>
  );
}
