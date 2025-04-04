import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Error({ error }) {
  return (
    <section>
      <Alert severity="error" variant="outlined">
        <AlertTitle>{error.code}</AlertTitle>
        {error.msg}
      </Alert>
    </section>
  );
}

export default Error;
