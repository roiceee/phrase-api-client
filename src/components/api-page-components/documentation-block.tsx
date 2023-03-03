import CodeBlock from "./code-block";
import ResponseBlock from "./response-block";

interface DocumentationBlockProps {
  title: string;
  description: string;
  codeBlockString: string;
  responseString: string;
  className?: string;
}

export default function DocumentationBlock({
  title,
  description,
  codeBlockString,
  responseString,
  className
}: DocumentationBlockProps) {
  return (
    <article className={className}>
      <h5>{title}</h5>
      <div>{description}</div>
      <CodeBlock>{codeBlockString}</CodeBlock>
      <div>Response:</div>
      <ResponseBlock>{responseString}</ResponseBlock>
    </article>
  );
}
