import React from "react";
import { Link } from "react-router-dom";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type NavbarProps = {
  loginFlag: boolean;
};
const Navbar: React.FC<NavbarProps> = ({ loginFlag }) => {
  return (
    <nav className="navBar">
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {loginFlag ? (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to="logout">
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            ログアウト
          </Link>
        </>
      ) : (
        <Link to="login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
