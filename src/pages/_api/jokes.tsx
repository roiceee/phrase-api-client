import DocumentationBlock from "@/components/api-page-components/documentation-block";
import DocumentationBoilerPlate from "@/components/api-page-components/documentation-boilerplate";
import JokeCodeStrings from "@/components/api-page-components/jokes-code-strings";
import APIPageLayout from "@/components/layouts/api-page-layout";

export default function Quotes() {
  return (
    <APIPageLayout>
      <DocumentationBoilerPlate resourceType="jokes">
        <DocumentationBlock
          title="Random Joke"
          description="You can fetch a random joke by specifying the 'type' parameter to 'joke'."
          codeBlockString={JokeCodeStrings.fetchRandomJoke}
          responseString={JokeCodeStrings.fetchRandomJokeResponse}
        />

        <DocumentationBlock
          title="Multiple Random Jokes"
          description="You can fetch multiple random jokes by adding the parameter 'qty' with a value of '1-12'."
          codeBlockString={JokeCodeStrings.fetchMultipleRandomJokes}
          responseString={JokeCodeStrings.fetchMultipleRandomJokesResponse}
        />

        <DocumentationBlock
          title="Multiple Random Jokes With Query"
          description="You can fetch multiple random jokes with query by adding the parameter 'query' with the keyword of your choice."
          codeBlockString={JokeCodeStrings.fetchMultipleRandomJokesWithQuery}
          responseString={JokeCodeStrings.fetchMultipleRandomJokesWithQueryResponse}
        />

        <DocumentationBlock
          title="Multiple Jokes With Query and Pagination"
          description="You can fetch multiple jokes with query and pagination support by adding the parameter 'page' with a value starting from '0'."
          codeBlockString={JokeCodeStrings.fetchMultipleJokesWithQueryAndPagination}
          responseString={JokeCodeStrings.fetchMultipleJokesWithQueryAndPaginationResponse}
        />
      </DocumentationBoilerPlate>
    </APIPageLayout>
  );
}
