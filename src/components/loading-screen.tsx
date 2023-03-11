import Image from "next/image";
import { Spinner } from "react-bootstrap";

export default function LoadingScreen() {
    return (
        <div style={{height: "100vh"}} className="d-flex flex-column text-center justify-content-center align-items-center">
            <h4>Phrase API</h4>
            <Spinner className="mt-3" role={"status"} />
        </div>
    )
    
};
