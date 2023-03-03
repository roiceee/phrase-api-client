import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface ResponseBlockProps {
    children : string;
}
export default function ResponseBlock({children} : ResponseBlockProps) {
    return (
        <SyntaxHighlighter language="json" style={nightOwl}>
            {children}
        </SyntaxHighlighter>
    )
};
