import PhraseSearch from "../phrase-search/phrase-search";


interface ClientSearchPagination {
    content: PhraseSearch[];
    totalElements: number;
    totalPages: number;
    empty: boolean;
    first: boolean;
    last: boolean;
    size: number;
  
    number: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
  }

export default ClientSearchPagination;