import SideNav from "../side-nav";

function AdminSideNav() {
  return (
    <SideNav
      links={[
        { href: "/admin", displayName: "Overview" },
        {
          href: "/admin/submissions/all",
          displayName: "Submissions",
          highlightWhenContains: "/admin/submissions",
        },
      ]}
    />
  );
}

export default AdminSideNav;
