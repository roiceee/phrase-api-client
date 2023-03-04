import APIPageLayout from "@/components/layouts/api-page-layout";
import DocumentationBlock from "@/components/api-page-components/documentation-block";
import PhraseCodeStrings from "@/assets/static-data/phrases-code-string";
import DocumentationBoilerPlate from "@/components/api-page-components/documentation-boilerplate";
import { Table } from "react-bootstrap";
import ParameterTable, { TableRow } from "@/components/api-page-components/parameter-table";

export default function Phrase() {

  const apiKeyTableRow: TableRow = {row: {param: "APIKey", value: "YOUR API KEY"}};
  const typeTableRow: TableRow = {row: {param: "type", value: "'joke' | 'quote'"}};
  const qtyTableRow: TableRow = {row: {param: "qty", value: "'1' - '12'"}};
  const queryTableRow: TableRow = {row: {param: "query", value: "ANY ALPHANUMERIC CHARACTER/S"}}
  const pageTableRow: TableRow = {row: {param: "page", value: "'0' and above"}}
  
  return (
    <APIPageLayout>
      <DocumentationBoilerPlate resourceType="phrases">
        <DocumentationBlock
          title="Random Phrase"
          description="You can fetch a random phrases by specifying the 'type' parameter to 'quote' or 'joke'. For concise documentation, we would use quotes for on our examples."
          codeBlockString={PhraseCodeStrings.fetchRandomPhrase}
          responseString={PhraseCodeStrings.fetchRandomPhraseResponse}
          parameterTableRows={[apiKeyTableRow, typeTableRow]}
        />

        <DocumentationBlock
          title="Multiple Random Phrases"
          description="You can fetch multiple random phrases by adding the 'qty' parameter with a value ranging from '1-12'."
          codeBlockString={PhraseCodeStrings.fetchMultipleRandomPhrases}
          responseString={PhraseCodeStrings.fetchMultipleRandomPhrasesResponse}
          parameterTableRows={[apiKeyTableRow, typeTableRow, qtyTableRow]}
        />

       
        <DocumentationBlock
          title="Multiple Random Phrases With Query"
          description="You can fetch multiple random quotes with query by adding the 'query' parameter with a value of the keyword of your choice."
          codeBlockString={
            PhraseCodeStrings.fetchMultipleRandomPhrasesWithQuery
          }
          responseString={
            PhraseCodeStrings.fetchMultipleRandomPhrasesWithQueryResponse
          }
          parameterTableRows={[apiKeyTableRow, typeTableRow, qtyTableRow, queryTableRow]}
        />

        <DocumentationBlock
          title="Multiple Phrases With Query and Pagination"
          description="You can fetch quotes with query and pagination support by adding the 'page' parameter with a value starting from '0'."
          codeBlockString={
            PhraseCodeStrings.fetchMultiplePhrasesWithQueryAndPagination
          }
          responseString={
            PhraseCodeStrings.fetchMultiplePhrasesWithQueryAndPaginationResponse
          }
          parameterTableRows={[apiKeyTableRow, typeTableRow, qtyTableRow, queryTableRow, pageTableRow]}
        />
      </DocumentationBoilerPlate>
    </APIPageLayout>
  );
}
