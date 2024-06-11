import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [login, setlogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img src="https://search.app.goo.gl/Miw5pGD" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              login === "Login" ? setlogin("Logout") : setlogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
