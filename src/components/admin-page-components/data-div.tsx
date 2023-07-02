import { Col } from "react-bootstrap";

interface DataDivProps {
    children?: React.ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

function DataDiv({children, xs, sm, md, lg, xl, xxl}: DataDivProps) {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className="data-div border p-2 rounded-3 shadow-sm bg-dark text-light">
      {children}
    </Col>
  );
}

export default DataDiv;
