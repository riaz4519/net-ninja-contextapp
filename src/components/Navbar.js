import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    static contextType = ThemeContext
  return (
    <nav>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
