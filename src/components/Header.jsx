import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { useContext } from "react";

function Header() {
  const { loggedInUser } = useContext(LoggedInUserContext);
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src="/logo.png" alt="logo" />
      </Link>

      <Link> Coding </Link>
      <Link> Football </Link>
      <Link> Cooking </Link>

      <Link to="/login">
        <p className="login">
          {loggedInUser.username ? loggedInUser.username : "Login"}
        </p>
      </Link>
    </header>
  );
}

export default Header;
