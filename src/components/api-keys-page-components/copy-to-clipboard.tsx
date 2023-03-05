import { Button, OverlayTrigger, Tooltip, TooltipProps } from "react-bootstrap";
import copy from "copy-to-clipboard";
import { RefAttributes, useCallback, useRef, useState } from "react";

interface CopyToClipboardProps {
  text: string;
}

export default function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [show, setShow] = useState(false);

  const copyToClipboard = useCallback((str: string) => {
    copy(str);
    setShow(true);
    setTimeout(() => {
        setShow(false);
    }, 3000)
  }, []);

  const renderTooltip = (
    props: JSX.IntrinsicAttributes &
      TooltipProps &
      RefAttributes<HTMLDivElement>
  ) => (
    <Tooltip id="button-tooltip" {...props}>
      Copied to Clipboard!
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="bottom" show={show} overlay={renderTooltip}>
      <Button variant="gray" onClick={() => copyToClipboard(text)}>
        Copy
      </Button>
    </OverlayTrigger>
  );
}
