import Image from "next/image";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-4">
      <Container className="d-flex align-items-center justify-content-center gap-1">
        <Image
          src={"/images/phrase-icon.png"}
          height={40}
          width={40}
          alt={"Phrase API logo"}
          priority={false}
        />
        <span className="fs-6">Phrase API | All Rights Reserved.</span>
      </Container>
    </footer>
  );
}
