import * as React from "react";
import Pagination from "@mui/material/Pagination";

function PaginationLine({ pageCount }) {
  function handlePageChange(event, page) {
    console.log(page);
  }
  return <Pagination count={pageCount} onChange={handlePageChange} />;
}

export default PaginationLine;
