import SideNav from "./side-nav";
import SideNavCollapse from "./side-nav-collapse";

interface OffCanvasProps {
  children: JSX.Element | JSX.Element[];
}

export default function OffCanvasLeft() {
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
          <SideNav />
        </div>
      </div>

      <div className="d-md-none">
        <SideNavCollapse>
          <SideNav />
        </SideNavCollapse>
      </div>
    </>
  );
}
