import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { authLogin, fetchStartLogin, setlog } from "../../slices/auth.slice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  message,
  tamMessage,
  codAnimation,
} from "../../assets/text/textAnimation";

import Swal from "sweetalert2";

const Login = () => {
  const mostrarAlerta = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡Correo o contraseña incorrecta!",
      footer: "help: +51 955014274",
      background: '#2B0254',
      color: '#fff',
    });
  };

  const dispatch = useDispatch();
  const { status, log, error } = useSelector((state) => state.auth);

  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin());
    //aquitaba el if status pero no funcionaba, [revisar luego]
  };

  //-----------Richard
  const [getInto, setGetInto] = useState(false);
  const [firsRender, setFirstRender]=useState(true)// pa que no aparezca el mensaje de erro en el login
  const navigate = useNavigate();
  const logearse = () => {
    navigate("/");
  };
  //-----------

  useEffect(() => {
    if (status === "authenticated" && log === 0) {
      dispatch(setlog());
      setGetInto(true);
      setTimeout(logearse, 2500);
    } else if (status === "not-authenticated" || status === "checking") {
      firsRender?null:error!==0 && mostrarAlerta()
      setFirstRender(false)
    } else if (status === "authenticated" && log > 0) {
      logearse();
    }
  }, [status,error]);
  return (
    <div className="imagenlogin">
      <div className={`blur flx-ja-cc ${getInto ? "login-in__blur" : ""}`}>
        <div className={`login ${getInto ? "login-in" : ""}`}>
          <h1 className="login__title">ESIS-UNJBG</h1>
          <div className="login__logo-container flx-j-c">
            <img className="login__logo" src={logo} alt="" />
          </div>
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__item">
              <label className="login__label" htmlFor="email">
                Ingrese su correo
              </label>
              <input
                className="login__input"
                type="email"
                value={email}
                name="email"
                onChange={handleInputChange}
                id="email"
                autoComplete="off"
              />
            </div>
            <div className="login__item">
              <label className="login__label" htmlFor="password">
                Ingrese su contraseña
              </label>
              <input
                className="login__input"
                type="password"
                value={password}
                onChange={handleInputChange}
                name="password"
                id="password"
                autoComplete="off"
              />
            </div>
            <div className="login__item login__item--center">
              <input
                className="login__input login__input--submit"
                type="submit"
                value="Login"
                // onClick={charging}
              ></input>
            </div>
          </form>
          <div className={`${getInto ? "login-in__header flx-a-c" : ""}`}>
            <span
              className={`${
                getInto ? "login-in__circle login-in__circle--red" : ""
              }`}
            ></span>
            <span
              className={`${
                getInto ? "login-in__circle login-in__circle--orange" : ""
              }`}
            ></span>
            <span
              className={`${
                getInto ? "login-in__circle login-in__circle--green" : ""
              }`}
            ></span>
          </div>
          <div className={`${getInto ? "login-in__tipeo" : ""}`}>
            <span
              className={`${getInto ? "login-in__cursor" : ""}`}
              style={{
                width: `${tamMessage + 1.5}ch`,
                animationTimingFunction: `linear,steps(${tamMessage})`,
              }}
            >{`${getInto ? message : ""}`}</span>
            <div className={`${getInto ? "login-in__cod-container" : ""}`}>
              <pre className={`${getInto ? "login-in__cod" : ""}`}>
                {`${getInto ? codAnimation : ""}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
