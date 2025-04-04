import { useContext, useEffect } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import LoginForm from "./LoginForm";

function LoginPage() {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);

  function handleLogout() {
    setLoggedInUser({});
  }

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  if (loggedInUser.username) {
    return (
      <section className="vertically-centered-section">
        <h1>Logged in as</h1>
        <h2>{loggedInUser.username}</h2>
        <p>(aka {loggedInUser.name})</p>
        <img src={loggedInUser.avatar_url} alt={loggedInUser.username} />
        <br />
        <button onClick={handleLogout}>Log out</button>
      </section>
    );
  }
  return (
    <section className="vertically-centered-section">
      <h1>Select your today’s persona</h1>
      <div className="user-container">
        <LoginForm />
      </div>
    </section>
  );
}

export default LoginPage;
