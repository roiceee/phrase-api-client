import HeadWrapper from "@/components/head-wrapper";
import Link from "next/link";
import { Container } from "react-bootstrap";
import _ from "lodash";

interface PageBoilerPlateProps {
  children?: JSX.Element | JSX.Element[];
  resourceType: string;
  className?: string;
}

export default function DocumentationBoilerPlate({
  children,
  resourceType,
  className,
}: PageBoilerPlateProps) {
  return (
    <>
      <HeadWrapper title={"API - " + _.capitalize(resourceType)} />
      <Container>
        <main>
          <h2>{_.capitalize(resourceType)}</h2>
          <hr />
          <p>
            This section contains documentation on fetching{" "}
            {resourceType.toLowerCase()} with Phrase API. Code examples are made
            for JavaScript{" "}
            <Link
              target={"_blank"}
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
            >
              Fetch API.
            </Link>
          </p>
          <div className={className}>{children}</div>
        </main>
      </Container>
    </>
  );
}
