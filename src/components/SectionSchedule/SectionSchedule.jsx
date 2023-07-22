import React, { useEffect, useRef } from "react";
import "./SectionSchedule.css";
import svgBg from "../../assets/img/background/hero-glow.svg";
import { Link as Scroll } from "react-scroll";

// function getViewPortWidth() {
//   let viewportwidth;
// if (typeof window.innerWidth != 'undefined') {
//   viewportwidth = window.innerWidth;
// } else if (typeof document.documentElement != 'undefined'   && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
//   viewportwidth = document.documentElement.clientWidth;
// } else {
//      viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
// }
//   console.log(viewportwidth)
//   if(viewportwidth<=640){
//       return 59;
//   }else{
//       return 69;
//   }
// }
const SectionSchedule = () => {
  let objAgenda = [
    { id: 1, hour: '09:10', event: 'Ceremonia de Inauguración' },
    {
      id: 2,
      hour: '09:30',
      event: "> Desarrollo de servicios API's con .Net Core"
    },
    {
      id: 3,
      hour: '10:15',
      event: 'Break'
    },
    {
      id: 4,
      hour: '10:30',
      event: '> Entrevistas Tecnicas (tipos y tips para pasarlas)'
    },
    {
      id: 5,
      hour: '11:15',
      event: '> API First'
    },
    { id: 6, hour: '12:00', event: 'Receso' },
    {
      id: 7,
      hour: '14:00',
      event: '> Agilidad en PaySafe Latam'
    },
    {
      id: 8,
      hour: '14:45',
      event: '> Tecnologías de la Información en la Salud'
    },
    {
      id: 9,
      hour: '15:30',
      event: 'Break'
    },
    {
      id: 10,
      hour: '15:45',
      event: '> Networking Cisco for Mining Sector'
    },
    { id: 11, hour: '16:30', event: 'Remembranza del Postmaster' },
    { id: 12, hour: '16:45', event: 'Clausura' }
  ];

  //
  return (
    <section className="section-agenda flx-j-c" id="agenda">

      <div className="title-section flx-j-c title-section--gapmin">
        <h2 className="title-section__h2 title-section__h2--white">
          Agenda
        </h2>
        <p className="title-section__p">
          <span className="lined"></span>SEPTIEMBRE 02
        </p>
      </div>
      <div className="agenda">
        <pre className="agenda__consulta">mysql&gt; SELECT * FROM agenda</pre>
        <div className="agenda__container">
          {objAgenda.map((item) => {
            let maxLetter = 69;
            let lineSeparator = "+ ";
            for (let i = 0; i < maxLetter / 2 - 2; i++) {
              lineSeparator += "- ";
            }
            lineSeparator += "+";
            return (
              <React.Fragment key={item.id}>
                <div className="agenda__border flx-a-c">
                  <span className="mas" style={{ paddingRight: ".5rem" }}>
                    +
                  </span>
                  <span className="dashed">
                    <span className="dashed dashed2"></span>
                  </span>
                  <span className="mas" style={{ paddingLeft: ".5rem" }}>
                    +
                  </span>
                </div>
                <div className="agenda__ponencia flx-a-c">
                  <div className=" flx-a-c" style={{ flexGrow: "1" }}>
                    <span className="agenda__line-start"></span>
                    <span className="agenda__data flx-a-c">{item.hour}</span>
                    <span className="agenda__separator"></span>
                    <span className="agenda__data agenda__data--event flx-a-c">
                      {item.event}
                    </span>
                  </div>
                  <span className="agenda__line-end"></span>
                </div>
                <div className="agenda__border flx-a-c">
                  <span className="mas" style={{ paddingRight: ".5rem" }}>
                    +
                  </span>
                  <span className="dashed">
                    <span className="dashed dashed2"></span>
                  </span>
                  <span className="mas" style={{ paddingLeft: ".5rem" }}>
                    +
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="evento-info flx-a-c section-l">
        <div className="evento-info__container flx-a-c">
          <div className="evento-info__data">
            <span id="dia">01</span>
            DÍA
          </div>
          <div className="evento-info__data">
            <span id="ponentes">04</span>
            PONENTES
          </div>
          <div className="evento-info__data">
            <span id="asistentes">200</span>
            ASISTENTES
          </div>
          <div className="evento-info__data">
            <span id="espectadores">&#8734;</span>
            ESPECTADORES
          </div>
        </div>
        <div className="main-nav__item">
          <Scroll
            className="main-nav__link main-nav__link--inscrip flx-a-c"
            to="contactanos"
            smooth={true}
            offset={50}
            duration={600}
          >
            Pre-inscripción
          </Scroll>
        </div>
      </div>
    </section>
  );
};

export default SectionSchedule;
