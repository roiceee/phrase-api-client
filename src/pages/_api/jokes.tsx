import APIBodyLayout from "@/components/layouts/api-body-layout";
import HeadWrapper from "@/util-components/head-wrapper";
import { Container } from "react-bootstrap";

export default function Quotes() {
  return (
    <APIBodyLayout>
      <HeadWrapper title={"Jokes - API"} />
      <Container>
        <h3>Description on how to request jokes from the API.</h3>
      </Container>
    </APIBodyLayout>
  );
}
