import APIPageLayout from "@/components/layouts/api-page-layout";
import HeadWrapper from "@/components/head-wrapper";
import Link from "next/link";
import { Container } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CodeBlock from "@/components/api-page-components/code-block";

export default function Quotes() {
  const fetchRandomQuoteCode: string = `

  async function fetchRandomJoke() {
    const response = await fetch(https://SERVERURL/api?type=joke, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })

    const data = await response.json();
    return data;
    
  }

  `;

  return (
    <APIPageLayout>
      <HeadWrapper title={"API - Quotes"} />
      <Container>
        <main>
          <h2>Quotes</h2>
          <hr />
          <p>
            This section contains documentation on fetching quotes with Phrase
            API. Code examples are made for JavaScript{" "}
            <Link
              target={"_blank"}
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
            >
              Fetch API.
            </Link>
          </p>
          <br />
          <article>
            <h5>Random Quote</h5>
            <p>
              You can fetch a random quote by specifying the &apos;type&apos;
              parameter to &apos;quote&apos;.
            </p>
          </article>

          <CodeBlock>{fetchRandomQuoteCode}</CodeBlock>
        </main>
      </Container>
    </APIPageLayout>
  );
}
