import MainLayout from "@/components/layouts/main-layout";
import HeadWrapper from "@/components/gen-components/head-wrapper";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import style from "../assets/styles/scss/small-viewport.module.scss";
import Quotes from "@/components/index-page-components/quotes";
import Link from "next/link";

export default function Home() {


  return (
    <MainLayout>
      <HeadWrapper />
      <article className="d-flex flex-column gap-5 text-light">
        <section
          style={{ backgroundImage: `url(/images/phrase-api-background.png)`, backgroundPositionY: "50%", padding: "80px 0px" }}
          className="bg-darkblue"
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
                    Supply meaningful text to your app!
                  </div>
                  <div style={{ fontSize: "1.2rem" }} className="text-gray">
                    Phrase API allows you to fetch jokes, quotes, etc. to your
                    frontend web application.
                  </div>
                </div>
                <Link href={"/_api"}>
                  <Button variant="primary">
                    <b className="fs-5">Explore API - It&apos;s free!</b>
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section style={{padding: "80px 0px"}}>
          <Quotes className="text-dark" />
        </section>

        <section className="text-center text-light bg-darkblue" style={{padding: "80px 0px"}}>
          <Container>
            <header className="fs-1">Why use Phrase API?</header>
            <Row className="gap-4 mt-5">
              <Col md>
                <div className="fs-3 text-primary">Easy to use</div>
                <div className="fs-6">
                  Requests are designed to be simple. Integrate to your frontend
                  application in minutes.
                </div>
              </Col>
              <Col md>
                <div className="fs-3 text-primary">Well-documented</div>
                <div className="fs-6">
                  Concise, comprehensive description and demos for each
                  use-case.
                </div>
              </Col>
              <Col md>
                <div className="fs-3 text-primary">Fast</div>
                <div className="fs-6">
                  Fetch meaningful text with almost no latency.{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </article>
    </MainLayout>
  );
}
