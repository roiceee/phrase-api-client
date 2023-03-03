import APIPageLayout from "@/components/layouts/api-page-layout";
import HeadWrapper from "@/util-components/head-wrapper";
import { Container } from "react-bootstrap";

export default function Quotes() {
  return (
    <APIPageLayout>
      <HeadWrapper title={"Jokes API"} />
      <Container>
        <main>
          <h2>Jokes</h2>
          <hr />
          <article>
            <h5>
              This section contains documentation on fetching jokes with Phrase
              API.
            </h5>
          </article>
        </main>
      </Container>
    </APIPageLayout>
  );
}
