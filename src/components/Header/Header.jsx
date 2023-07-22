import React, { useEffect } from "react";
import "./Header.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout } from "../../slices/auth.slice";
import { useNavigate } from "react-router-dom";

const Header = ({ state, login }) => {
  const { username, status } = useSelector((state) => state.auth);

  const buttonToggle = useRef(),
    menuContainer = useRef(),
    menuToggle = useRef();
  const XD = () => {
    buttonToggle.current.classList.toggle("active");
    menuContainer.current.classList.toggle("menu-container__active");
    menuToggle.current.classList.toggle("menu-toggle__active");
  };
  const onMenuToggle = () => {
    XD();
  };
  const MenuUl = () => {
    if (buttonToggle.current.classList[1]) {
      XD();
    }
  };

  //

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(setLogout())
  };

  const logearse = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <div ref={buttonToggle} onClick={onMenuToggle} className="button-toggle">
        <div className="linea-toggle"></div>
      </div>
      <div className="header-nav" ref={menuContainer}>
        <nav className="main-nav" ref={menuToggle}>
          <ul className="main-nav__list flx-a-c" onClick={MenuUl}>
            <li className="main-nav__item" id="link">
              {state ? (
                <Scroll
                  className="main-nav__link"
                  to="inicio"
                  smooth={true}
                  offset={0}
                  duration={600}
                >
                  Inicio
                </Scroll>
              ) : (
                <a className="main-nav__link" onClick={logearse}>
                  Inicio
                </a>
              )}
            </li>
            {state ? (
              <li className="main-nav__item">
                <Scroll
                  className="main-nav__link"
                  to="ponentes"
                  smooth={true}
                  offset={50}
                  duration={600}
                >
                  Ponentes
                </Scroll>
              </li>
            ) : (
              ""
            )}
            <li className="main-nav__item">
              {state ? (
                <Scroll
                  className="main-nav__link"
                  to="agenda"
                  smooth={true}
                  offset={0}
                  duration={600}
                >
                  Agenda
                </Scroll>
              ) : (
                <Link className="main-nav__link" to="/">
                  Agenda
                </Link>
              )}
            </li>
            <li className="main-nav__item">
              {state ? (
                <Scroll
                  className="main-nav__link"
                  to="lugar"
                  smooth={true}
                  offset={250}
                  duration={600}
                >
                  Preguntas frecuentes
                </Scroll>
              ) : (
                <Link className="main-nav__link" to="/">
                  Preguntas frecuentes
                </Link>
              )}
            </li>
            {state ? (
              status === "authenticated" ? (
                <li className="main-nav__item">
                  <Link className="main-nav__link" to="main-page">
                    Asistencia
                  </Link>
                </li>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {state ? (
              status === "authenticated" ? (
                <li className="main-nav__item ">
                  <span
                    className="main-nav__link main-nav__link--inscrip flx-ja-cc nav__user"
                    onClick={onLogout}
                  >
                     {username}
                  </span>
                </li>
              ) : (
                <li className="main-nav__item ">
                  <Link
                    className="main-nav__link main-nav__link--inscrip flx-ja-cc"
                    to="/login"
                  >
                     Iniciar sesion
                  </Link>
                </li>
              )
            ) : (
              <li className="main-nav__item">
                <Link
                  className="main-nav__link"
                  to="/login"
                  style={{ visibility: "hidden" }}
                ></Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
