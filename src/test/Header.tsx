import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="header">
      <h1>Tanstack Router</h1>
      <nav className="navigation">
        <Link to="/" activeProps={{ style: { color: "red" } }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
