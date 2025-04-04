import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { useContext } from "react";
import "../styles/HeaderFooter.css";
import UserAvatar from "./UserIcon";

function Header() {
  const { loggedInUser } = useContext(LoggedInUserContext);
  return (
    <header>
      <section className="top-level-section">
        <nav>
          <Link to={"/"}>
            <img
              className="logo"
              src="src/visuals/logo.png"
              alt="NC News logo"
            />
          </Link>

          <Link to={"/?topic=coding"} className="header-link">
            Coding
          </Link>

          <Link to={"/?topic=football"} className="header-link">
            Football
          </Link>
          <Link to={"/?topic=cooking"} className="header-link">
            Cooking
          </Link>
        </nav>
        <Link className="login" to="/login">
          {loggedInUser.username ? (
            <UserAvatar user={loggedInUser} />
          ) : (
            <p>Login</p>
          )}
        </Link>
      </section>
    </header>
  );
}

export default Header;
