import React, { useEffect } from "react";

import ponente from "../../assets/img/speakers/ponente.jpg";
import iconFacebook from "../../assets/img/icons/icon-facebook-purple.svg";
import iconTwitter from "../../assets/img/icons/icon-twitter-purple.svg";
import iconLinkedin from "../../assets/img/icons/icon-linkedin-purple.svg";

import "./SectionSpeakers.css";
import { useDispatch, useSelector } from "react-redux";
import { CardSpeaker } from "./CardSpeaker";
import { fetchPonentes } from "../../slices/ponentes.slice";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionSpeakers = () => {
  const { checkingPonentes, ponentes } = useSelector((state) => state.ponentes);

  if (checkingPonentes) {
    return <h1>Cargando ponentes</h1>;
  }
  AOS.init();
  let cont = 0;

  return (
    <section className="section-ponentes" id="ponentes">
      <div className="title-section flx-j-c">
        <h2 className="title-section__h2">Ponentes</h2>
        <p className="title-section__p">
          06 <span className="lined"></span> EXPERTOS DESTACADOS EN LA INDUSTRIA
        </p>
      </div>
      <div className="section-ponentes__cards  section-m">
        {ponentes.map((ponente, index) => {
          cont++;
          return (
            <CardSpeaker
              cont={cont}
              key={index}
              index={index + 1}
              foto={ponente.foto}
              fullName={ponente.fullName}
              descripcion={ponente.descripcion}
              facebook={ponente.facebook}
              instagram={ponente.instagram}
              linkedin={ponente.linkedin}
              tituloPonencia={ponente.tituloPonencia}
              especialidad={ponente.especialidad}
              twitter={ponente.twitter}
              youtube={ponente.youtube}
              github={ponente.github}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionSpeakers;
