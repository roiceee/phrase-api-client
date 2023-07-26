import Image from "next/image";
import { Spinner } from "react-bootstrap";
import HeadWrapper from "./head-wrapper";

interface LoadingScreenProps {
    additionalInfo?: string;
}

export default function LoadingScreen({additionalInfo}: LoadingScreenProps) {
    return (
        <div style={{height: "100vh"}} className="d-flex flex-column text-center justify-content-center align-items-center">
            <HeadWrapper title={"Loading"}/>
            <h4>Phrase API</h4>
            <Spinner className="mt-3" role={"status"} />
            {additionalInfo && (
                <h5 className="mt-3">{additionalInfo}</h5>
            )}
        </div>
    )
    
};
