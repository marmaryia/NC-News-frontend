import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Error({ error }) {
  return (
    <Alert severity="error" variant="outlined">
      <AlertTitle>{error.code}</AlertTitle>
      {error.msg}
    </Alert>
  );
}

export default Error;
