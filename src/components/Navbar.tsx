import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../styles/navbar.scss";
import Actions from "./Navbar/Actions";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC<any> = ({ ...rest }) => {
  const [colorChange, setColorchange] = useState(false);
  const { height } = useWindowDimensions();

  const [navbarToggle, setNavbarToggle] = useState(false);
  const navigate = useNavigate();

  const changeNavbarColor = () => {
    if (window.scrollY >= height) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const homeHandler = () => {
    !window.location.pathname.endsWith("/") && navigate("/");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div
      className={
        colorChange || navbarToggle
          ? "nav-body bg-white"
          : "nav-body bg-transparent"
      }
      {...rest}
    >
      <div className="logo" onClick={homeHandler}>
        tententgc{" "}
        <div
          className={
            window.location.pathname.endsWith("/") ? "line-visible" : ""
          }
        />
      </div>
      <Actions navbarToggle={navbarToggle} setNavbarToggle={setNavbarToggle} />
    </div>
  );
};

export default Navbar;
