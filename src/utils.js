export default function formatDate(timestampString) {
  return {
    day: new Date(timestampString).toLocaleString("en-GB", {
      timeZone: "UTC",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    time: new Date(timestampString).toLocaleString("en-GB", {
      timeZone: "UTC",
      hour: "numeric",
      minute: "numeric",
    }),
  };
}
