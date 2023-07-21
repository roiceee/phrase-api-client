import PhraseCRUD from "../phrase-crud/phrase-crud";

interface PhraseAdminPagination {
  //make types based on spring boot pagination interface
  content: PhraseCRUD[];
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
