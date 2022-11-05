import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC<any> = ({ ...rest }) => {
  const date = new Date();
  const navigate = useNavigate();
  const homeHandler = () => {
    if (!window.location.pathname.endsWith("/")) {
      navigate("/");
      window.scrollTo(0, 0);
    }
  };
  const projectHandler = () => {
    if (!window.location.pathname.includes("projects")) {
      navigate("/projects");
      window.scrollTo(0, 0);
    }
  };
  const contractHandler = () => {
    if (!window.location.pathname.includes("contacts")) {
      navigate("/contacts");
      window.scrollTo(0, 0);
    }
  };
  return (
    <footer
      className="p-10 m-0 bg-gradient-to-r from-rose-100 to-teal-100"
      {...rest}
    >
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
        <div className="px-10 m-10 leading-7 text-black min-w-sm ">
          <b>About</b>
          <div>
            This site created for the purpose to express my hobby, like, and
            experience. My journey in this career path have start since 2020,
            since then I just an ordinary student who don’t know what to do in
            the future. But things started to change since I enter computer
            science banchelor, it is like miracle that I met my friends who
            share same interest. Everythings I have met have driven me to
            challenge myself to conquer new things. Finally, I notice how much I
            obsessed with programming.
          </div>
        </div>
        <div className="px-10 m-10 leading-7 text-black min-w-sm">
          <b>Navigation</b>
          <div className="flex flex-col">
            <div
              onClick={homeHandler}
              className="cursor-pointer hover:underline"
            >
              Home
            </div>
            <div
              onClick={projectHandler}
              className="cursor-pointer hover:underline"
            >
              Projects
            </div>
            <div
              onClick={contractHandler}
              className="cursor-pointer hover:underline"
            >
              Contacts
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 m-10 mt-10 text-gray-600 md:mt-0 w-full">
        <div className="mb-5">
          Copyright © {date.getFullYear()} by Tententgc, all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
