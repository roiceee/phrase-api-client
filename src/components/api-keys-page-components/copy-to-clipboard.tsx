import { Button, OverlayTrigger, Tooltip, TooltipProps } from "react-bootstrap";
import copy from "copy-to-clipboard";
import { RefAttributes, useCallback, useRef, useState } from "react";

interface CopyToClipboardProps {
  text: string;
}

export default function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [copied, setCopied] = useState<"Copy" | "✔ Copied!">("Copy");

  const copyToClipboard = useCallback((str: string) => {
    copy(str);
    setCopied("✔ Copied!");
    setTimeout(() => {
      setCopied("Copy");
    }, 5000);
  }, []);

  return (
    <Button variant="gray" onClick={() => copyToClipboard(text)}>
      {copied}
    </Button>
  );
}
