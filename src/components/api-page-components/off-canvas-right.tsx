interface OffCanvasRightProps {
  children: JSX.Element | JSX.Element[];
}
export default function OffCanvasRight({ children }: OffCanvasRightProps) {
  return (
    <div
      className="offcanvas offcanvas-end show d-none d-lg-block"
      tabIndex={-1}
      id="offcanvasleft"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-body mt-5">
        <div>On this page</div>
        <hr />
        {children}
      </div>
    </div>
  );
}
