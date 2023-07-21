import ClientSearchPagination from "@/types/client-search-pagination/client-search-pagination";
import PhraseAdminPagination from "@/types/phrase-admin-pagination/phrase-admin-pagination";
import _ from "lodash";
import Link from "next/link";
import { useMemo } from "react";

interface CustomPaginationProps {
  pagination: PhraseAdminPagination | ClientSearchPagination;
  clientSideRoute: string;
}

function CustomPagination({
  pagination,
  clientSideRoute,
}: CustomPaginationProps) {
  const renderPagination = useMemo(() => {
    const page = pagination.number + 1;
    const totalPages = pagination.totalPages;

    const pageNumbers = _.range(
      Math.max(0, page - 3),
      Math.min(totalPages, page + 3)
    );
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <Link
          className="page-link"
          key={number}
          href={`${clientSideRoute}${number + 1}`}
        >
          {number + 1}
        </Link>
      );
    });
    return (
      <nav>
        <ul className="pagination gap-1">
          <li className="page-item">
            <Link className="page-link" href={`${clientSideRoute}${1}`}>
              &lt;&lt;
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              href={`${clientSideRoute}${page === 1 ? page : page - 1}`}
            >
              &lt;
            </Link>
          </li>
          {renderPageNumbers}
          <li className="page-item">
            <Link
              className="page-link"
              href={`${clientSideRoute}${
                page === totalPages ? page : page + 1
              }`}
            >
              &gt;
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              href={`${clientSideRoute}${totalPages}`}
            >
              &gt;&gt;
            </Link>
          </li>
        </ul>
      </nav>
    );
  }, [pagination.totalPages, pagination.number, clientSideRoute]);

  return renderPagination;
}

export default CustomPagination;
