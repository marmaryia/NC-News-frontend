import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

export default function ArticlesFilter({
  topicsList,
  topicsAreLoading,
  setSearchParams,
  searchParams,
}) {
  const [topic, setTopic] = useState(searchParams.get("topic") || "");

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (!topic) {
      newParams.delete("topic");
    } else {
      newParams.set("topic", topic);
    }
    setSearchParams(newParams);
  }, [topic]);

  if (topicsAreLoading) return <div>Loading...</div>;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small">
        <InputLabel id="demo-simple-select-label">Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={topic}
          label="Topic"
          onChange={handleChange}
        >
          <MenuItem value="">Everything</MenuItem>
          {topicsList.map((topicObj) => {
            return (
              <MenuItem key={topicObj.slug} value={topicObj.slug}>
                {topicObj.slug[0].toUpperCase() + topicObj.slug.slice(1)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
