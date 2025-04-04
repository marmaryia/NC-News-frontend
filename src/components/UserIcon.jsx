import Avatar from "@mui/material/Avatar";

export default function UserAvatar({ user }) {
  return (
    <Avatar
      alt={user.username}
      src={user.avatar_url}
      sx={{ width: 56, height: 56 }}
    />
  );
}
