import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeBlockProps {
    children: string;
}
export default function CodeBlock({children} : CodeBlockProps) {
    return (
        <SyntaxHighlighter language='javascript' style={nightOwl} showLineNumbers customStyle={{borderRadius: "6px"}}>
            {children}
        </SyntaxHighlighter>
    )
};
