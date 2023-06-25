interface Phrase {
    id: number | null;
    phrase: string;
    type: "joke" | "quote" | "other" | string;
    author: string;
    status: "PENDING" | "ACCEPTED" | "REJECTED" | null;
}

export default Phrase;