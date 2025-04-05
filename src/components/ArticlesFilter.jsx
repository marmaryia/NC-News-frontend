import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ArticlesFilter({
  topicsList,
  topicsAreLoading,
  setSearchParams,
  searchParams,
  queries,
  setQueries,
}) {
  function handleChange(event) {
    setQueries((current) => {
      return { ...current, topic: event.target.value, p: 1 };
    });

    const newParams = new URLSearchParams(searchParams);

    if (event.target.value === "Everything") {
      newParams.delete("topic");
    } else {
      newParams.set("topic", event.target.value);
    }
    newParams.set("p", 1);
    setSearchParams(newParams);
  }

  if (topicsAreLoading) return <div>Loading...</div>;

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-label">Topic</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={queries.topic}
        label="Topic"
        onChange={handleChange}
      >
        <MenuItem value="Everything">Everything</MenuItem>
        {topicsList.map((topicObj) => {
          return (
            <MenuItem key={topicObj.slug} value={topicObj.slug}>
              {topicObj.slug[0].toUpperCase() + topicObj.slug.slice(1)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
