import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

function Header() {
  const OnlineStatus = useOnlineStatus();
  const [login, setlogin] = useState("Login");
  const { username } = useContext(UserContext);
  console.log(username);
  return (
    <div className="flex justify-between bg-teal-50 shadow-lg">
      <div className="logo-conatiner">
        <img src="data:image/jpeg;base64,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" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">{username}</li>
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
