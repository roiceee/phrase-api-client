import APIPageLayout from "@/components/layouts/api-page-layout";
import DocumentationBlock from "@/components/api-page-components/documentation-block";
import QuoteCodeStrings from "@/components/api-page-components/quotes-code-string";
import DocumentationBoilerPlate from "@/components/api-page-components/documentation-boilerplate";

export default function Quotes() {
  return (
    <APIPageLayout>
      <DocumentationBoilerPlate resourceType="quotes">
        <DocumentationBlock
          title="Random Quote"
          description="You can fetch a random quote by specifying the 'type' parameter to 'quote'."
          codeBlockString={QuoteCodeStrings.fetchRandomQuote}
          responseString={QuoteCodeStrings.fetchRandomQuoteResponse}
        />

        <DocumentationBlock
          title="Multiple Random Quotes"
          description="You can fetch multiple random quotes by adding the 'qty' parameter with a value ranging from '1-12'."
          codeBlockString={QuoteCodeStrings.fetchMultipleRandomQuotes}
          responseString={QuoteCodeStrings.fetchMultipleRandomQuotesResponse}
        />

        <DocumentationBlock
          title="Multiple Random Quotes With Query"
          description="You can fetch multiple random quotes with query by adding the 'query' parameter with a value of the keyword of your choice."
          codeBlockString={QuoteCodeStrings.fetchMultipleRandomQuotesWithQuery}
          responseString={
            QuoteCodeStrings.fetchMultipleRandomQuotesWithQueryResponse
          }
        />

        <DocumentationBlock
          title="Multiple Quotes With Query and Pagination"
          description="You can fetch quotes with query and pagination support by adding the 'page' parameter with a value starting from '0'."
          codeBlockString={
            QuoteCodeStrings.fetchMultipleQuotesWithQueryAndPagination
          }
          responseString={
            QuoteCodeStrings.fetchMultipleQuotesWithQueryAndPaginationResponse
          }
        />
      </DocumentationBoilerPlate>
    </APIPageLayout>
  );
}
