import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className="top-level-section">
        <Link to="/about">About</Link>
        <Link to="https://github.com/marmaryia/NC-News-frontend">
          This project on Github
        </Link>
        <Link to="https://github.com/marmaryia/NC-News-backend">
          Backend project on Github
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
