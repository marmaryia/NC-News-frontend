import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src="/logo.png" alt="logo" />
      </Link>

      <Link> Coding </Link>
      <Link> Football </Link>
      <Link> Cooking </Link>

      <p className="login">Logged in as</p>
    </header>
  );
}

export default Header;
