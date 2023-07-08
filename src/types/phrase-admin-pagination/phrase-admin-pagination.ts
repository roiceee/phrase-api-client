import Phrase from "../phrase";

interface PhraseAdminPagination {
  //make types based on spring boot pagination interface
  content: Phrase[];
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

export default PhraseAdminPagination;
