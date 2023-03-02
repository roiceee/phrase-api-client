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
            render to your client applications. Here is a high level
            illustration on how client fetches data from the server:
          </p>

          <div style={{ position: "relative", height: "400px", width: "100%" }}>
            <Image
              src={"/images/request-overview.png"}
              alt="Fetch example"
              fill
              style={{ objectFit: "contain" }}
              priority={false}
            />
          </div>

          <p>
            Phrase API has a server and database that allows the client (your
            frontend application, for example) to fetch resources. The server
            sends data in a structured format (like JSON). The client is then
            responsible for rendering the data through the Document Object Model
            (DOM).
          </p>
          <p>
            For starters, you can take a look at javascript{" "}
            <Link
              target={"_blank"}
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
            >
              fetch api
            </Link>
            .
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, cum velit iste vel voluptas rerum eaque atque, cumque, fugit exercitationem tenetur placeat amet repudiandae! Ea itaque molestiae perspiciatis enim quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ex nostrum minus rerum, sint repellat quae nobis quibusdam libero voluptatum quas adipisci itaque praesentium consequuntur aliquam ea sapiente laudantium veritatis?
            Accusamus dolor dicta, iste expedita deserunt inventore quam corrupti eum consectetur illum illo, quae quo minus vitae ratione corporis, facilis ipsam ullam voluptatibus. Debitis quam veritatis itaque enim dolorem! Laudantium.
            Quas vero nesciunt recusandae modi laborum eveniet similique. Nesciunt, obcaecati. Fuga recusandae nemo sed voluptas ea dignissimos suscipit voluptatum, vitae commodi accusantium magnam pariatur nesciunt repudiandae atque assumenda aut rerum.
            Quasi repellendus quaerat dolorum. Autem totam accusantium sunt dolor voluptatibus commodi, iure fugit consectetur iusto ut earum officia repudiandae inventore quos esse aperiam aliquid! Sunt dicta esse aperiam sapiente dolore!
            Autem distinctio, nostrum id expedita deleniti nam provident totam odio aliquid quibusdam adipisci rem, culpa, corporis dolore est consectetur unde. Blanditiis cumque ab magnam porro repellat atque quasi, nostrum mollitia!
            Quas vero perferendis magni eaque numquam possimus cupiditate voluptatibus, sapiente debitis sed, sunt voluptate deleniti culpa, consequatur commodi quasi. Inventore nulla in repellendus! Nostrum officiis qui autem saepe facilis quasi?
            Architecto ipsam amet veritatis repellat deserunt sed explicabo inventore placeat, fuga maiores. At ratione eos ipsum laudantium sint ipsa necessitatibus, maiores tenetur eum sunt, ut neque, architecto repellat facere dolores!
            Consectetur praesentium necessitatibus cumque nesciunt, sed consequatur eum dolorum fugit ratione odit illum similique repellendus nobis saepe quidem error sit natus autem earum, doloremque perspiciatis et magni rem veritatis? Dolorum.
          </p>
        </article>
      </Container>
    </APIBodyLayout>
  );
}
