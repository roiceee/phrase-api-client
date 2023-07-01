import SideNav from "../side-nav";

function AdminSideNav() {
    return ( 
        <SideNav links={[{href: "/admin", displayName: "Overview"}]}/>
     );
}

export default AdminSideNav;