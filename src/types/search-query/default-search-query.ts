import SearchQuery from "./search-query";

function createDefaultSearchQuery() : SearchQuery {
    return ( 
        {
            query: "",
            searchBy: "phrase",
            type: "quote",
            orderBy: "desc",
            page: 1,
            qty: 12
        }
     );
}

export default createDefaultSearchQuery;