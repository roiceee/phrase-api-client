import CopyToClipboard from "../api-keys-page-components/copy-to-clipboard";
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
    <article className={`${className}`}>
      <h4>{title}</h4>
      <div>{description}</div>
      <div className=" position-relative">
        <CodeBlock>{codeBlockString}</CodeBlock>
        <CopyToClipboard variant="outline-light" className=" position-absolute top-0 end-0 mt-1 me-1" text={codeBlockString}/>
      </div>
      <div>Response:</div>
      <ResponseBlock>{responseString}</ResponseBlock>
      {parameterTableRows && <ParameterTable tableRows={parameterTableRows} />}
    </article>
  );
}
