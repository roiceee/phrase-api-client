import PhraseCRUD from "./phrase-crud";

function createDefaultPhraseCRUD () : PhraseCRUD{
   return ({
    id: null,
    phrase: "",
    type: "",
    author: "",
    status: "PENDING",
    dateSubmitted: "",
   })
}

export default createDefaultPhraseCRUD;