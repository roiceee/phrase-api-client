import { Badge } from "react-bootstrap";

interface StatusSpanProps {
    status: "APPROVED" | "PENDING" | "REJECTED" | null;
}

function StatusSpan({status}: StatusSpanProps) {
    return ( 
        <>
        {status === "APPROVED" && <Badge bg="primary">Approved</Badge>}
        {status === "PENDING" && <Badge bg="warning">Pending</Badge>}
        {status === "REJECTED" && <Badge bg="danger">Rejected</Badge>}
        </>
        
     );
}

export default StatusSpan;