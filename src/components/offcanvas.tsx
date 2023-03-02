import SideNav from "./side-nav";
import SideNavCollapse from "./side-nav-collapse";

export default function OffCanvas() {

    //when screen = lg, show expanded offcanvas. when screen < lg, show collapsed navbar
  return (
    <>
      <div
        className="offcanvas offcanvas-start show d-none d-lg-block"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-body mt-5">
          <SideNav />
        </div>
      </div>

      <div className="d-lg-none">
        <SideNavCollapse>
          <SideNav />
        </SideNavCollapse>
      </div>
    </>
  );
}
