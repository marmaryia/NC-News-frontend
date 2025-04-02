import Pagination from "@mui/material/Pagination";

function PaginationLine({ page, setPage, pageCount }) {
  function handlePageChange(event, page) {
    setPage(page);
  }

  return (
    <Pagination
      count={pageCount}
      page={Number(page)}
      onChange={handlePageChange}
    />
  );
}

export default PaginationLine;
