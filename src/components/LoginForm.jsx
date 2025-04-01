import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";

function LoginForm({ users }) {
  const [selectedUser, setSelectedUser] = useState();
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);

  function handleChange(e) {
    if (e.target.value) {
      setSelectedUser(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedUser) {
      setLoggedInUser(users[selectedUser]);
    }
  }

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="username"></label>
      <select id="username">
        <option key="empty"> </option>
        {users.map((user, i) => {
          return (
            <option key={user.username} value={i}>
              {user.username}
            </option>
          );
        })}
      </select>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default LoginForm;
