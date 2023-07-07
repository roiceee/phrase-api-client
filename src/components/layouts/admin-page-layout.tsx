import AdminSideNav from "../admin-page-components/AdminSideNav";
import LayoutWithSideNav from "./split-layout";

interface AdminPageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function AdminPageLayout({ children }: AdminPageLayoutProps) {
  return (
    <LayoutWithSideNav sideNav={<AdminSideNav />}>
      {children}
    </LayoutWithSideNav>
  );
}

export default AdminPageLayout;
