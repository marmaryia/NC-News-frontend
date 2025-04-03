import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function ErrorPage() {
  return (
    <Alert severity="error">
      <AlertTitle>404</AlertTitle>
      Page not found
    </Alert>
  );
}
