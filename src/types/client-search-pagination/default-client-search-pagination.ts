import ClientSearchPagination from "./client-search-pagination";

function createDefaultClientSearchPagination(): ClientSearchPagination {
    return {
      content: [],
      totalElements: 0,
      totalPages: 0,
      empty: true,
      first: true,
      last: true,
      size: 0,
      number: 0,
      sort: {
        sorted: false,
        unsorted: false,
        empty: false,
      },
      numberOfElements: 0,
    };
  }
  
  export default createDefaultClientSearchPagination;