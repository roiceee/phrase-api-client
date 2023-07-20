import SearchPageSideNav from "../search-page-components/search-page-sidenav";
import LayoutWithSideNav from "./split-layout";

interface SearchPageLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

function SearchPageLayout({ children }: SearchPageLayoutProps) {
  return (
    <LayoutWithSideNav sideNav={<SearchPageSideNav />}>
      {!children ? <></> : children}
    </LayoutWithSideNav>
  );
}

export default SearchPageLayout;
