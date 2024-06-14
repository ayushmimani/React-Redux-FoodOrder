import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import UserContext from "./components/Utils/UserContext";
import { useContext, useEffect, useState } from "react";

function App() {
  const [userinfo, setuserinfo] = useState();

  useEffect(() => {
    const data = {
      name: "Ayush",
    };
    setuserinfo(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ username: userinfo, setuserinfo }}>
      <div className="main">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
