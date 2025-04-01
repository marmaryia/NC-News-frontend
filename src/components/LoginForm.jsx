import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { getAllUsers } from "../api";

function LoginForm() {
  const [selectedUser, setSelectedUser] = useState();
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    getAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  if (isLoading) return <p>Loading...</p>;

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
