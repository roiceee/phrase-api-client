import SideNav from "../gen-components/side-nav";

function AdminSideNav() {
  return (
    <SideNav
      links={[
        { href: "/admin", displayName: "Overview" },
        {
          href: "/admin/submissions/all/1",
          displayName: "Submissions",
          highlightWhenContains: "/admin/submissions",
        },
      ]}
    />
  );
}

export default AdminSideNav;
