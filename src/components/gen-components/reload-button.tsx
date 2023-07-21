import { Button } from "react-bootstrap";

interface ReloadButtonProps {
    onClick?: () => {}
    className?: string;
}

function ReloadButton({onClick, className}: ReloadButtonProps) {
    return ( 
        <Button variant="dark" onClick={onClick} className={className}>Reload</Button>
     );
}

export default ReloadButton;