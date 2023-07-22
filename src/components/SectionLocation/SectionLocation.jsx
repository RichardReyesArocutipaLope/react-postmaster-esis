import React from "react";
import "./SectionLocation.css";
import auditorio from "../../assets/img/place/auditorio_1.jpg";

const SectionLocation = () => {
  return (
    <section className="section-faq" id="lugar">
      <h2 className="faq__title">Preguntas Frecuentes</h2>
      <div className="question">
        <h3>¿Quién puede asistir al POST-MASTER?</h3>
        <span>Cualquier persona, las inscripciones están abiertas para todos,
          desde un estudiante hasta profesionales del área.</span>
      </div>
      <div className="question">
        <h3>¿Como puedo asistir al evento?</h3>
        <span>Primero debes llenar el formulario de pre-inscripción, se te
          enviará un correo electrónico con un enlace de confirmación, en el
          deberás crear una contraseña para tu cuenta y enseguida recibirás un
          correo electrónico con los enlaces para acceder al evento.</span>
      </div>
      <div className="question">
        <h3>¿Tiene algún costo la inscripción?</h3>
        <span>No, este evento es gratuito.</span>
      </div>
      <div className="question">
        <h3>¿Me darán un certificado al culminar el evento?</h3>
        <span>Sí, este tiene un costo de S/. 10.00, además de un mínimo de 80% de
          asistencia, para los interesados al finalizar el evento se les
          enviará un correo electrónico con los datos necesarios para efectuar
          el pago, un par de días después recibirán el certificado
          virtual.</span>
      </div>
    </section>
  );
};

export default SectionLocation;
