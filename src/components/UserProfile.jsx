import { useContext, useEffect } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";

function UserProfile() {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  function handleLogout() {
    setLoggedInUser({});
  }

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);
  return <button onClick={handleLogout}>Log out</button>;
}

export default UserProfile;
