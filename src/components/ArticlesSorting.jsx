import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

function ArticlesSorting({ searchParams, setSearchParams }) {
  const [sortQueries, setSortQueries] = useState({
    sort_by: searchParams.get("sort_by") || "created_at",
    order: searchParams.get("order") || "desc",
  });

  function handleQuery(event, newSortQuery) {
    if (newSortQuery !== null) {
      setSortQueries((current) => {
        return { ...current, sort_by: newSortQuery };
      });
    }
  }

  function handleDirection(event, newSortDirection) {
    if (newSortDirection !== null) {
      setSortQueries((current) => {
        return { ...current, order: newSortDirection };
      });
    }
  }

  function handleSubmit() {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortQueries.sort_by);
    newParams.set("order", sortQueries.order);
    setSearchParams(newParams);
  }

  return (
    <Stack direction="row" spacing={3}>
      <ToggleButtonGroup
        value={sortQueries.sort_by}
        exclusive
        onChange={handleQuery}
      >
        <ToggleButton value="created_at">Date</ToggleButton>
        <ToggleButton value="comment_count">Comment count</ToggleButton>
        <ToggleButton value="votes">Votes</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={sortQueries.order}
        exclusive
        onChange={handleDirection}
      >
        <ToggleButton value="desc">Desc</ToggleButton>
        <ToggleButton value="asc">Asc</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
        <ToggleButton onClick={handleSubmit}>Sort</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ArticlesSorting;
