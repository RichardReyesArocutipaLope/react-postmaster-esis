import React, { useRef } from "react";
import "./SectionContacUs.css"
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { fetchInsciption } from '../../slices/auth.slice';

const SectionContactUs = () => {

  // window.recaptchaOptions = {
  //   useRecaptchaNet: true,
  // }
  const refRecatcha = useRef(null);
  const [values, handleInputChange, reset, setEsta] = useForm({
    email: '',
    fullName: '',
  })
  const dispatch = useDispatch();

  const { email, fullName, token } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (refRecatcha.current.getValue()) {
      const token = refRecatcha.current.getValue();
      if (values.email === '' && values.fullName === '') alert('No puedes enviar valores vacios');
      dispatch(fetchInsciption({ ...values, token }))
    } else {
      alert('Presiona el recaptcha')
    }
  }

  return (
    <section className="section-contactanos" id="contactanos">
      <div className="wrapper-contactanos section-m">
        <div className="contactanos__title main-title">
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

        <div className="separacion"></div>

        <div className="contactanos__info flx-a-c">
          <div>
            <h3>¿Qué?</h3>
            <p>XIX POST-MASTER</p>
          </div>
          <div>
            <h3>¿Cúando?</h3>
            <p>September 02, 2022</p>
          </div>
          <div>
            <h3>¿Dónde?</h3>
            <p>Miraflores S/N, Tacna 23000</p>
          </div>
          <div className="main-nav__item">
            <a
              className="main-nav__link main-nav__link--inscrip"
              href="./#contactanos"
              style={{ padding: '1rem' }}
            >
              Pre-inscripción
            </a>
          </div>
        </div>
        <div className="separacion"></div>
        <div className="contactanos__form">
          <h2 className="contactanos__form-title">Pre-inscripción</h2>
          <p>Para obtener más informacion, no dude en ponerse en contacto</p>
          <form onSubmit={handleSubmit} className="flx-a-c">
            <div className="inputs flx-a-c">
              <label className="inputs__label">
                <input
                  className="inputs__item"
                  id="inputName"
                  type="text"
                  placeholder="* Nombre Completo"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                />
              </label>
              <label className="inputs__label">
                <input
                  className="inputs__item"
                  id="inputEmail"
                  type="email"
                  placeholder="* Correo Electrónico"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="inputs flx-a-c">
              <ReCAPTCHA
                ref={refRecatcha}
                // size='invisible'
                sitekey='6Ld5l4whAAAAAMALvbDlozxx6Nk5tcB-lFHq-HAW'
              // onChange={onChange}
              // grecaptcha={grecaptchaObject}
              />
              <input className="enviar" type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContactUs;
