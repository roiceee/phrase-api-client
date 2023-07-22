import { Button } from "react-bootstrap";
import copy from "copy-to-clipboard";
import { CSSProperties, useCallback, useState } from "react";

interface CopyToClipboardProps {
  text: string;
  className?: string;
  variant?: string;
  style?: CSSProperties;
}

export default function CopyToClipboard({
  text,
  className,
  variant,
  style,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState<"Copy" | "✔ Copied!">("Copy");

  const copyToClipboard = useCallback((str: string) => {
    copy(str);
    setCopied("✔ Copied!");
    setTimeout(() => {
      setCopied("Copy");
    }, 5000);
  }, []);

  return (
    <Button
      variant={!variant ? "gray" : variant}
      onClick={() => copyToClipboard(text)}
      className={className}
      style={style}
    >
      {copied}
    </Button>
  );
}
