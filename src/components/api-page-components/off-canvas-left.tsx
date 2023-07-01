import SideNavCollapse from "./side-nav-collapse";

interface OffCanvasProps {
  
  sideNav: JSX.Element;
}

export default function OffCanvasLeft({sideNav}: OffCanvasProps) {
  //when screen = lg, show expanded offcanvas. when screen < lg, show collapsed navbar
  return (
    <>
      <div
        className="offcanvas offcanvas-start show d-none d-md-block"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-body" style={{marginTop: "100px"}}>
          {sideNav}
        </div>
      </div>

      <div className="d-md-none">
        <SideNavCollapse>
          {sideNav}
        </SideNavCollapse>
      </div>
    </>
  );
}
