import React from "react";
import "./SectionBanner.css";

import backgroundbanner from "../../assets/img/background/banner_1.jpg";
import logo from "../../assets/img/logo.png";
import { Link as Scroll } from "react-scroll";
import { useSelector } from "react-redux";

const SectionBanner = () => {
  const { status } = useSelector((state) => state.auth);
  return (
    <section
      className="main-banner__fondo"
      id="inicio"
      style={{ backgroundImage: `url(${backgroundbanner})` }}
    >
      <div className="main-banner">
        <a className="main-logo" href="#">
          <img
            className="main-logo__img"
            src={logo}
            alt="Logo-esis-postmaster"
          />
        </a>
        <div className="main-title">
          <h1 className="main-title__h1">
            <div className="main-title__xix flx-a-c">
              <span>&lt; </span>
              <span>X</span>
              <span>I</span>
              <span>X</span>
              <span>&gt;</span>
            </div>
            <div className="main-title__post flx-a-c">
              <span>P</span>
              <span>O</span>
              <span>S</span>
              <span>T</span>
              <span>-</span>
              <span>M</span>
              <span>A</span>
              <span>S</span>
              <span>T</span>
              <span>E</span>
              <span>R</span>
            </div>
          </h1>
          <p className="flx-a-c">
            <span className="lined"></span>"Encuentro de egresados"
          </p>
        </div>
        <div className="main-info flx-a-c">
          <div className="main-info__container  flx-a-c">
            <div className="main-info__item">SEPTIEMBRE 02</div>
            <div className="main-info__item">TACNA</div>
            {status === "authenticated" ? null : (
              <Scroll
                to="contactanos"
                smooth={true}
                offset={50}
                duration={600}
                className="main-info__item main-info__item--preinscrip"
              >
                Pre-inscripción
              </Scroll>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
