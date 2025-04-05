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
        <Link to={"/"}>
          <img className="logo" src="/logo.png" alt="NC News logo" />
        </Link>
        <nav>
          <Link to={"/?topic=coding"} className="header-link">
            CODING
          </Link>

          <Link to={"/?topic=football"} className="header-link">
            FOOTBALL
          </Link>
          <Link to={"/?topic=cooking"} className="header-link">
            COOKING
          </Link>
        </nav>
        <Link className="login" to="/login">
          {loggedInUser.username ? (
            <UserAvatar user={loggedInUser} />
          ) : (
            <p>LOGIN</p>
          )}
        </Link>
      </section>
    </header>
  );
}

export default Header;
