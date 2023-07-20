interface Phrase {
    id: number | null;
    phrase: string;
    type: "joke" | "quote" | "other" | string;
    author: string;
    status: "PENDING" | "APPROVED" | "REJECTED" | null;
    dateSubmitted: string;
}

export default Phrase;