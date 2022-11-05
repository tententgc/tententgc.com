import React, { useEffect } from "react";
import contact1 from "../assets/logo/contact1.jpeg";
import mailLogo from "../assets/logo/email.png";
import linkedinLogo from "../assets/logo/linkedin.png";
import facebookLogo from "../assets/logo/facebook-app-symbol.png";
import githubLogo from "../assets/logo/github.png";


const Contacts: React.FC = () => {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center mt-10">
      <div className="bg-gradient-to-tr from-rose-100 to-teal-100 flex rounded-2xl shadow-2xl max-w-3xl p-5">
        <div className="w-1/2">
          <h2 className="font-bold text-2xl justify-center">Contacts</h2>
          <p className="text-gray-500">Get In touch with me</p>
          <div className="flex flex-col items-center gap-10 mt-20">
            <a
              className="flex p-2 gap-2 rounded-md justify-center w-96 relative"
              href="mailto: work@tententgc.com"
              target="_blank"
            >
              <img className="absolute left-4" src={mailLogo} alt="Mail" />
              <div>work@tententgc.com</div>
            </a>
            <a
              className="flex p-2 gap-2 rounded-md  justify-center w-96 relative"
              href="https://github.com/tententgc"
              target="_blank"
            >
              <img className="absolute left-4" src={githubLogo} alt="Github" />
              <div>tententgc</div>
            </a>
            <a
              className="flex p-2 gap-2 rounded-md  justify-center w-96 relative"
              href="https://www.facebook.com/tententgc/"
              target="_blank"
            >
              <img
                className="absolute left-4"
                src={facebookLogo}
                alt="Facebook"
              />
              <div>Thanyapisit tenten Buaprakhong</div>
            </a>
            <a
              className="flex p-2 gap-2 rounded-md justify-center w-96 relative"
              href="https://www.linkedin.com/in/thanyapisit-buaprakhong-bb0143184/"
              target="_blank"
            >
              <img
                className="absolute left-4"
                src={linkedinLogo}
                alt="Linkedin"
              />
              <div>Thanyapisit Buaprakhong </div>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img className="rounded-2xl" src={contact1} alt="contact1" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
