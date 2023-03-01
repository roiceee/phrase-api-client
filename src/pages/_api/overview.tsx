import APIBodyLayout from "@/components/layouts/api-body-layout";
import HeadWrapper from "@/util-components/head-wrapper";
import { Container } from "react-bootstrap";

export default function APIIndex() {
  return (
    <APIBodyLayout>
      <HeadWrapper title={"API"} />
      <Container>
        <h3>This contains the overview on how to use the API.</h3>
      </Container>
    </APIBodyLayout>
  );
}
