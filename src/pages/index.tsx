import MainLayout from "@/components/main-layout";
import HeadWrapper from "@/util-components/head-wrapper";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import style from "../assets/styles/scss/small-viewport.module.scss";
import backdrop from "../assets/images/phrase-api-background.png";
import classNames from "classnames";
import Quotes from "@/components/quotes";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const redirectToAPI = useCallback(() => {
    router.push("/_api");
  }, [router]);

  return (
    <MainLayout>
      <HeadWrapper title={""} />
      <article className="d-flex flex-column gap-5">
        <section
          style={{ backgroundImage: `url(/images/phrase-api-background.png)` }}
          className="py-5"
        >
          <Container>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  className={`${style.removeOnTablet}`}
                  src={"/images/phrase-icon.png"}
                  alt="Phrase API Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <div className="mb-4">
                  <div className="fs-1 mb-3">
                    Supply meaningful text to your frontend!
                  </div>
                  <h5>
                    Phrase API allows you to fetch jokes, quotes, etc. to your
                    frontend web application.
                  </h5>
                </div>
                <Button variant="outline-primary" onClick={redirectToAPI}>
                  <b className="fs-4">Explore API! - It&apos;s free!</b>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Quotes className="text-dark" />
        </section>

        <section className="text-center text-light bg-secondary py-3">
          <Container>
            <header className="fs-1">Why use Phrase API?</header>
            <Row className="gap-4 my-4">
              <Col md>
                <div className="fs-3">Easy to use</div>
                <div className="fs-6">
                  Requests are designed to be simple. Integrate to your frontend
                  application in minutes.
                </div>
              </Col>
              <Col md>
                <div className="fs-3">Well-documented</div>
                <div className="fs-6">
                  Concise, comprehensive description and demos for each
                  use-case.
                </div>
              </Col>
              <Col md>
                <div className="fs-3">Fast</div>
                <div className="fs-6">
                  Fetch meaningful texts with almost no latency.{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </article>
    </MainLayout>
  );
}
