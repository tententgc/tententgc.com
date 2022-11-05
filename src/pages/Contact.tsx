import React from "react";
import phone from "../assets/logo/phone.png";
import mailLogo from "../assets/logo/email.png";
import linkedinLogo from "../assets/logo/linkedin.png";
import facebookLogo from "../assets/logo/facebook-app-symbol.png";
import githubLogo from "../assets/logo/github.png";

const Contact: React.FC<any> = () => {
  return (
    <section className="antialiased">
      <div className="min-h-screen flex w-full items-center justify-center">
        <div
          className="bg-gradient-to-tr from-yellow-100 via-green-100 to-sky-100 flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 rounded-2xl shadow-2xl max-w-4xl p-8 
        sm:p-12"
        >
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide"> Contact Me</h1>
              <p className="pt-2 text-gray-500 text-sm">
                Get In touch with me{" "}
              </p>
            </div>
            <div className="flex flex-col space-y-10">
              <a
                className="inline-flex space-x-2 items-center"
                href="mailto: work@tententgc.com"
                target="_blank"
              >
                <img className="text-xl" src={mailLogo} alt="Mail" />
                <div>work@tententgc.com</div>
              </a>
              <a
                className="inline-flex space-x-2 items-center"
                href="https://github.com/tententgc"
                target="_blank"
              >
                <img className="text-xl" src={githubLogo} alt="Github" />
                <div>tententgc</div>
              </a>
              <a
                className="inline-flex space-x-2 items-center"
                href="https://www.facebook.com/tententgc/"
                target="_blank"
              >
                <img className="text-xl" src={facebookLogo} alt="Facebook" />
                <div>Thanyapisit tenten Buaprakhong</div>
              </a>
              <a
                className="inline-flex space-x-2 items-center"
                href="https://www.linkedin.com/in/thanyapisit-buaprakhong-bb0143184/"
                target="_blank"
              >
                <img className="text-xl" src={linkedinLogo} alt="Linkedin" />
                <div>Thanyapisit Buaprakhong </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-6 md:w-80">
            <img
              className="rounded-2xl shadow-lg p-8"
              src={phone}
              alt="contact1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
