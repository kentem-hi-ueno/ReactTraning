import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { CreatePost } from "./components/CreatePost/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Logout } from "./components/Logout/Logout";
import { Login } from "./components/Login/Login";
("react-router-dom");
import "./App.css";

function App() {
  let authFlag: boolean = false;
  if (localStorage.getItem("isAuth") === "true") {
    authFlag = true;
  }

  const [isAuth, setIsAuth] = useState(authFlag);
  return (
    <Router>
      <Navbar loginFlag={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/logout"
          element={<Logout setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
