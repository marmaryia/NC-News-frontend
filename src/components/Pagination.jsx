import Pagination from "@mui/material/Pagination";

function PaginationLine({
  queries,
  setQueries,
  pageCount,
  searchParams,
  setSearchParams,
}) {
  function handlePageChange(event, page) {
    setQueries((current) => {
      return { ...current, p: page };
    });
    const newParams = new URLSearchParams(searchParams);
    newParams.set("p", page);
    setSearchParams(newParams);
  }

  return (
    <Pagination
      count={pageCount}
      page={queries.p}
      onChange={handlePageChange}
    />
  );
}

export default PaginationLine;
