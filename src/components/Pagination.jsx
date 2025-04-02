import * as React from "react";
import Pagination from "@mui/material/Pagination";

function PaginationLine({ pageCount, searchParams, setSearchParams }) {
  function handlePageChange(event, page) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("p", page);
    setSearchParams(newParams);
  }
  return <Pagination count={pageCount} onChange={handlePageChange} />;
}

export default PaginationLine;
