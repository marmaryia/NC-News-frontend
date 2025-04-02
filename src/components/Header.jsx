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

      <Link to={"/?topic=coding"}> Coding </Link>
      <Link to={"/?topic=football"}> Football </Link>
      <Link to={"/?topic=cooking"}> Cooking </Link>

      <Link to="/login">
        <p className="login">
          {loggedInUser.username ? loggedInUser.username : "Login"}
        </p>
      </Link>
    </header>
  );
}

export default Header;
