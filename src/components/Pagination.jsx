import Pagination from "@mui/material/Pagination";

function PaginationLine({
  page,
  setPage,
  pageCount,
  searchParams,
  setSearchParams,
}) {
  function handlePageChange(event, page) {
    setPage(page);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("p", page);
    setSearchParams(newParams);
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
