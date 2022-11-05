import React, { useState, useLayoutEffect, useEffect } from "react";
import "../styles/about.scss";
import * as ScrollMagic from "scrollmagic"
import Lottie from "lottie-react";
import developer from "../assets/lottie/developer.json";
import phone from "../assets/logo/phone.png";
import profile from "../assets/profile.png";
const AboutMe: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    document.title = "Tententgc";
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Profile Image Slide in
    // new ScrollMagic.Scene({
    //   triggerElement: ".image-wrapper",
    //   offset: 200,
    // })
    //   .setClassToggle(".profile", "slide-in")
    //   .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".me",
      offset: 150,
    })
      .setClassToggle(".content1", "pop-in")
      .addTo(controller);

    // Draw line
    new ScrollMagic.Scene({
      triggerElement: ".line-wrapper",
      triggerHook: "onCenter",
    })
      .setClassToggle(".line", "full-grow")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education1", "education1-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education1-text", "education1-text-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education2", "education2-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education2-text", "education2-text-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".set-trigger",
      triggerHook: "onCenter",
      offset: 200,
    })
      .setClassToggle(".ready", "ready-out")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".set-trigger",
      triggerHook: "onCenter",
      offset: 200,
    })
      .setClassToggle(".go", "go-visible")
      .addTo(controller);
  }, []);
  return (
    <div className="content-body">
      <div className="say-hello flex-center text-2xl md:text-5xl">
        <div
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
          }}
        />
        <section className="antialiased">
          <div className=" min-h-screen flex w-full items-center justify-center">
            <div
              className="bg-slate-100 flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 rounded-2xl shadow-2xl max-w-4xl p-8 
        sm:p-12"
            >
              <div className="flex flex-col space-y-8 justify-between">
                <div className="flex flex-col space-y-8 items-center">
                  <div className="flex flex-col space-y-8 justify-center md:w-80">
                    <img
                      className="rounded-2xl shadow-lg"
                      src={profile}
                      alt="contact1"
                    />
                  </div>
                </div>
              </div>
              <div className="say-hello-text ">
                <h1 className="mt-6 font-bold text-4xl tracking-wide">
                  Hi my name is{" "}
                </h1>
                <p className="pt-8 text-gray-500 text-2xl">
                  <br /> Thanyapisit Buaprakhong (Tenten)
                </p>
                <p className="pt-5 text-gray-500 text-xl">
                  Computer Science Students at <br />
                  <span className="text-sm">
                    King Mongkut's university of technology Thonburi (KMUTT)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="image-wrapper flex-col-reverse md:flex-row text-2xl md:text-3xl">
        <div className="introduction  md:w-3/6">
          <p className="me">Who am I?</p>
          <p className="content1">
            I'm a Developer who is passionate about making open-source more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, NodeJS, and MongoDB.
          </p>
        </div>
        <Lottie animationData={developer} loop={true} />;
      </div>
      <div className="set-trigger flex justify-center m-10 text-2xl">
        My Education
      </div>

      <div className="hidden sm:flex justify-center m-10 text-2xl">
        <div className="ready mt-10">Ready set</div>
        <div className="go mt-10 absolute">Go!</div>
      </div>
      <div className="line-wrapper text-left sm:h-screen flex flex-col items-center text-xl">
        <div id="line" className="line hidden sm:block" />
        <div className="sm:h-1/4" />
        <div className="relative">
          <div
            id="education"
            className="education1 hidden sm:block absolute top-7 h-2 bg-current rounded-2xl"
          ></div>
        </div>
        <div className="sm:ml-96 education1-text">
          Graduated at <p>Princess chulabhorn's science</p>
          <p>High school Pathumthani</p>
          <p>2015-2020</p>
        </div>
        <div className="sm:h-1/4" />
        <div className="relative">
          <div
            id="education"
            className="education2 hidden sm:block absolute right-px top-20 h-2 bg-current rounded-2xl"
          ></div>
        </div>
        <div className="sm:mr-80 my-10 education2-text">
          Currently studying at <p>KMUTT College</p>
          <p>2020-Present</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
