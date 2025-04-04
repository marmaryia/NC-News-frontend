import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { getAllUsers } from "../api";
import useApiRequest from "../useApiRequest";
import LoadingAnimation from "./LoadingAnimation";
import Error from "./Error";

function LoginForm() {
  const [selectedUser, setSelectedUser] = useState();
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const { data: users, isLoading, error } = useApiRequest(getAllUsers);

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

  if (isLoading) return <LoadingAnimation />;

  if (error) return <Error />;

  return (
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="login-form"
    >
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
