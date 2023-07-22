import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./SectionSpeakers.css";
import React from "react";
import AOS from "aos";

export const CardSpeaker = ({
  foto,
  fullName,
  tituloPonencia,
  descripcion,
  facebook,
  twitter,
  youtube,
  instagram,
  linkedin,
  github,
  especialidad,
  index,
  cont,
}) => {
  return (
    <article className="ponente flx-a-c">
      <div
        className="ponente__img"
        data-aos={`${cont%2==0?"fade-left":"fade-right"}`}
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <img src={foto} alt="ponente" />
      </div>
      <div className="ponente__info">
        <h2 className="ponente__name">{fullName}</h2>
        <p className="ponente__tema">&lt; {tituloPonencia} &gt;</p>
        <div className="ponente__description-container">
          <p className="ponente__description">{descripcion}</p>
        </div>
        <div className="ponente__redess flx-a-c">
          <span>Siguelo</span>
          {linkedin !== "" && (
            <span>
              <a className="icon__s" href={linkedin}>
                <FaLinkedin />
              </a>
            </span>
          )}
          {github !== "" && (
            <span>
              <a className="icon__s" href={github}>
                <FaGithub />
              </a>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
