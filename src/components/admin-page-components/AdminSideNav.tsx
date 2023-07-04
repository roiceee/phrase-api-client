import SideNav from "../side-nav";

function AdminSideNav() {
    return ( 
        <SideNav links={[{href: "/admin", displayName: "Overview"}, {href: "/admin/submissions", displayName: "Submissions"}]}/>
     );
}

export default AdminSideNav;