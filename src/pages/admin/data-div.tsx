import { Col } from "react-bootstrap";

interface DataDivProps {
    children?: React.ReactNode;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
}

function DataDiv({children, xs, sm, md, lg, xl, xxl}: DataDivProps) {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className="data-div border p-2 rounded-3 shadow-sm">
      {children}
    </Col>
  );
}

export default DataDiv;
