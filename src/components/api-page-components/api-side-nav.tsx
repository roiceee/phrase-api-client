import SideNav from "../gen-components/side-nav";

export default function ApiSideNav() {
  return (
    <SideNav
      links={[
        { href: "/_api", displayName: "Overview" },
        { href: "/_api/tutorial", displayName: "Tutorial" },
      ]}
    />
  );
}
