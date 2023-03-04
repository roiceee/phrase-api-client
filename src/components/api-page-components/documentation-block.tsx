import CodeBlock from "./code-block";
import ParameterTable, { TableRow } from "./parameter-table";
import ResponseBlock from "./response-block";

interface DocumentationBlockProps {
  title: string;
  description: string;
  codeBlockString: string;
  responseString: string;
  parameterTableRows?: TableRow[];
  className?: string;
}

export default function DocumentationBlock({
  title,
  description,
  codeBlockString,
  responseString,
  parameterTableRows,
  className,
}: DocumentationBlockProps) {
  return (
    <article className={`mb-5 ${className}`}>
      <h5>{title}</h5>
      <div>{description}</div>
      <CodeBlock>{codeBlockString}</CodeBlock>
      <div>Response:</div>
      <ResponseBlock>{responseString}</ResponseBlock>
      {parameterTableRows && <ParameterTable tableRows={parameterTableRows} />}
    </article>
  );
}
