import React, { useState } from 'react';
import SpeakerFullPage from "../../components/SpeakerFullPage/SpeakerFullPage";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import logo from "../../assets/img/logo.png";

const MainPage = () => {

  const [mainHeader, setMainHeader] = useState(false)
  const loginState = true

  return (

    <div className="main-page">
      <a className="main-logo" href="#">
        <img className="main-logo__img" src={logo} alt="Logo-esis-postmaster" />
      </a>
      <div className="contactanos__title main-title post-master-asistencia">
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
          <p>
            <span className="lined"></span>"Encuentro de egresados"
          </p>
        </div>
      <Header state={mainHeader} login={loginState} />
      <SpeakerFullPage />
      <p className='main-page__message-u'>Ingeniería en Informática y Sistemas | ESIS - UNJBG<span></span></p>
    </div>
  );
};

export default MainPage;
