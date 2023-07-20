import Phrase from "./phrase";

function createDefaultPhrase () : Phrase{
   return ({
    id: null,
    phrase: "",
    type: "",
    author: "",
    status: "PENDING",
    dateSubmitted: "",
   })
}

export default createDefaultPhrase;