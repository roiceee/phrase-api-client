import Phrase from "@/types/phrase/phrase";
import PhraseDiv from "../../gen-components/phrase-div/phrase-div";
import { useCallback, useState } from "react";
import ApproveButton from "./approve-button";
import PendButton from "./pend-button";
import RejectButton from "./reject-button";
import ConfirmActionDiv from "./confirm-action-div";
import { useAuth0 } from "@auth0/auth0-react";

interface AdminPhraseDivProps {
  phrase: Phrase;
}

function AdminPhraseDiv({ phrase }: AdminPhraseDivProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [operationState, setOperationState] = useState<
    "approve" | "pend" | "reject" | null
  >(null);
  const [phraseState, setPhraseState] = useState<Phrase>({ ...phrase });
  const { getAccessTokenSilently } = useAuth0();
  const [isErrorState, setIsErrorState] = useState<boolean>(false);

  const onDivClick = useCallback(() => {
    setIsClicked((prev) => !prev);
    if (operationState !== null) {
      setOperationState(null);
    }
  }, [operationState]);

  const onApproveClick = useCallback(() => {
    setOperationState("approve");
  }, []);

  const onPendClick = useCallback(() => {
    setOperationState("pend");
  }, []);

  const onRejectClick = useCallback(() => {
    setOperationState("reject");
  }, []);

  const onCancel = useCallback(() => {
    setOperationState(null);
  }, []);

  const approvePhrase = useCallback(
    async (phrase: Phrase) => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/approve?id=${phrase.id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const updatedPhrase = await response.json();
          setPhraseState(updatedPhrase);
        } else {
          setIsErrorState(true);
        }
      } catch {
        setIsErrorState(true);
      }
    },
    [getAccessTokenSilently]
  );

  const pendPhrase = useCallback(
    async (phrase: Phrase) => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/pend?id=${phrase.id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const updatedPhrase = await response.json();
          setPhraseState(updatedPhrase);
        } else {
          setIsErrorState(true);
        }
      } catch {
        setIsErrorState(true);
      }
    },
    [getAccessTokenSilently]
  );

  const rejectPhrase = useCallback(
    async (phrase: Phrase) => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/reject?id=${phrase.id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const updatedPhrase = await response.json();
          setPhraseState(updatedPhrase);
        } else {
          setIsErrorState(true);
        }
      } catch {
        setIsErrorState(true);
      }
    },
    [getAccessTokenSilently]
  );

  const approvePhraseHandler = useCallback(async () => {
    await approvePhrase(phraseState);
    onDivClick();
  }, [approvePhrase, phraseState, onDivClick]);

  const pendPhraseHandler = useCallback(async () => {
    await pendPhrase(phraseState);
    onDivClick();
  }, [pendPhrase, phraseState, onDivClick]);

  const rejectPhraseHandler = useCallback(async () => {
    await rejectPhrase(phraseState);
    onDivClick();
  }, [rejectPhrase, phraseState, onDivClick]);

  return (
    <PhraseDiv phrase={phraseState} onClick={onDivClick}>
      {isClicked && (
        <div className="mt-1">
          {!operationState && (
            <span
              className="d-inline-flex gap-md-2 gap-1"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ApproveButton
                disabled={phraseState.status === "APPROVED"}
                onClick={onApproveClick}
              />
              <PendButton
                disabled={phraseState.status === "PENDING"}
                onClick={onPendClick}
              />
              <RejectButton
                disabled={phraseState.status === "REJECTED"}
                onClick={onRejectClick}
              />
            </span>
          )}
          {operationState === "approve" && (
            <ConfirmActionDiv
              message="Approve this phrase?"
              action="approve"
              onCancel={onCancel}
              onActionButtonClick={approvePhraseHandler}
            />
          )}
          {operationState === "pend" && (
            <ConfirmActionDiv
              message="Pend this phrase?"
              action="pend"
              onCancel={onCancel}
              onActionButtonClick={pendPhraseHandler}
            />
          )}
          {operationState === "reject" && (
            <ConfirmActionDiv
              message="Reject this phrase?"
              action="reject"
              onCancel={onCancel}
              onActionButtonClick={rejectPhraseHandler}
            />
          )}
        </div>
      )}
      {isErrorState && (
        <div className="text-danger">
          An error occured while performing operation. Please try again later.
        </div>
      )}
    </PhraseDiv>
  );
}

export default AdminPhraseDiv;
