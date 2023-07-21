interface SearchQuery {
    query: string;
    searchBy: "phrase" | "author";
    type: "joke" | "quote";
    orderBy: "asc" | "desc";
    page: number;
    qty: 12;
  }

  export default SearchQuery;