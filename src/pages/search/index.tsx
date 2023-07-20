import HeadWrapper from "@/components/gen-components/head-wrapper";
import SearchPageLayout from "@/components/layouts/search-page-layout";
import _ from "lodash";
import Image from "next/image";
import { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import searchIcon from "public/images/search.svg";

function SearchPage() {
  const [searchByTypeState, setSearchByTypeState] = useState<"text" | "author">(
    "text"
  );

  return (
    <SearchPageLayout>
      <HeadWrapper title={"Search"} />
      <Container>
        <Row>
          <h2>Search</h2>
          <div>All request-ready phrases can be searched here.</div>
        </Row>
        <hr />

        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Search Bar"
            placeholder="Enter input here"
          />
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-gray"
              id="search-by-dropdown"
              className="text-dark"
            >
              Search by: {_.capitalize(searchByTypeState)}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Button}
                onClick={() => {
                  setSearchByTypeState("text");
                }}
              >
                Text
              </Dropdown.Item>
              <Dropdown.Item
                as={Button}
                onClick={() => {
                  setSearchByTypeState("author");
                }}
              >
                Author
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary">
            <Image src={searchIcon} alt="search icon" />
          </Button>
        </InputGroup>
      </Container>
    </SearchPageLayout>
  );
}

export default SearchPage;
