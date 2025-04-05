import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function ArticlesSorting({
  searchParams,
  setSearchParams,
  queries,
  setQueries,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", updateWidth);

  function updateWidth() {
    setWindowWidth(window.innerWidth);
  }

  function handleQuery(event, newSortQuery) {
    if (newSortQuery !== null) {
      setQueries((current) => {
        return { ...current, sort_by: newSortQuery };
      });
      const newParams = new URLSearchParams(searchParams);
      newParams.set("sort_by", newSortQuery);

      setSearchParams(newParams);
    }
  }

  function handleDirection(event, newSortDirection) {
    if (newSortDirection !== null) {
      setQueries((current) => {
        return { ...current, order: newSortDirection };
      });
      const newParams = new URLSearchParams(searchParams);

      newParams.set("order", newSortDirection);
      setSearchParams(newParams);
    }
  }

  return (
    <Stack direction="row" spacing={3}>
      <ToggleButtonGroup
        value={queries.sort_by}
        exclusive
        onChange={handleQuery}
        aria-label="Platform"
      >
        <ToggleButton value="created_at">
          <CalendarMonthIcon />
          {windowWidth > 750 ? " Date" : ""}
        </ToggleButton>
        <ToggleButton value="comment_count">
          <CommentOutlinedIcon /> {windowWidth > 750 ? " Comments" : ""}
        </ToggleButton>
        <ToggleButton value="votes">
          <FavoriteBorderOutlinedIcon /> {windowWidth > 750 ? " Votes" : ""}
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={queries.order}
        exclusive
        onChange={handleDirection}
        aria-label="Platform"
      >
        <ToggleButton value="desc" name="descending">
          <ArrowDownwardRoundedIcon />
        </ToggleButton>
        <ToggleButton value="asc" name="ascending">
          <ArrowUpwardRoundedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ArticlesSorting;
