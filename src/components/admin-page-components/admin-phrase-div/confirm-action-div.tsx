import { useCallback, useEffect, useState } from "react";
import ApproveButton from "./approve-button";
import CancelButton from "./cancel-button";
import PendButton from "./pend-button";
import RejectButton from "./reject-button";

interface ConfirmActionDivProps {
  message: string;
  action: "approve" | "pend" | "reject";
  onActionButtonClick: (() => void) | (() => Promise<void>);
  onCancel?: () => void;
}

function ConfirmActionDiv({
  message,
  action,
  onActionButtonClick,
  onCancel,
}: ConfirmActionDivProps) {
  const [transactionIsLoading, setTransactionIsLoading] =
    useState<boolean>(false);

  const actionHandler = useCallback(async () => {
    setTransactionIsLoading(true);
    await onActionButtonClick();
    setTransactionIsLoading(false);
  }, [onActionButtonClick]);

  return (
    <div className="d-flex align-items-center mt-2 gap-2">
      <h6 className="my-0">{message}</h6>
      <span
        className="d-flex gap-1"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {!transactionIsLoading && (
          <>
            {action === "approve" && (
              <ApproveButton isSolid onClick={actionHandler} />
            )}
            {action === "pend" && (
              <PendButton isSolid onClick={actionHandler} />
            )}
            {action === "reject" && (
              <RejectButton isSolid onClick={actionHandler} />
            )}

            <CancelButton onClick={onCancel} />
          </>
        )}
        {transactionIsLoading && <h6>Loading...</h6>}
      </span>
    </div>
  );
}

export default ConfirmActionDiv;
