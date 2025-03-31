import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src="/logo.png" alt="logo" />
      </Link>
      <ul>
        <li>Coding</li>
        <li>Football</li>
        <li>Cooking</li>
      </ul>
      <p className="login">Logged in as</p>
    </header>
  );
}

export default Header;
