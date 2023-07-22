import React from "react";

// import alienware from "../../assets/img/sponsors/alienware.svg"
// import asus from "../../assets/img/sponsors/asus.svg"
// import msi from "../../assets/img/sponsors/msi.svg"
// import nvidia from "../../assets/img/sponsors/nvidia.svg"


import caranegra from "../../assets/img/sponsors/caranegra.png"
import ceid from "../../assets/img/sponsors/ceid.png"
import egatur from "../../assets/img/sponsors/egatur.png"
import itel from "../../assets/img/sponsors/itel.png"
import lacume from "../../assets/img/sponsors/lacume.png"
import eroz from '../../assets/img/sponsors/eroz_filmakers_v3.png'

import "./SectionSponsor.css"

const SectionSponsor = () => {
  return (
    <section className="section-auspiciadores" id="auspiciadores">
      <div className="title-section flx-j-c title-section--gapmin">
        <h2 className="title-section__h2 title-section__h2--white">
          Nuestros Auspiciadores
        </h2>
        <p className="title-section__p title-section__p--white">
          <span className="lined lined--white"></span>LIDERES EN LA INDUSTRIA
        </p>
      </div>
      <div className="auspiciadores section-l">
        <a className="auspiciadores__link" href="http://ceid.unjbg.edu.pe/"><img src={ceid}
          alt="Ceid" /></a>
        <a className="auspiciadores__link" href="https://egatur.edu.pe/"><img src={egatur}
          alt="Egatur" /></a>
        <a className="auspiciadores__link" href="http://itel.unjbg.edu.pe/"><img src={itel}
          alt="Itel" /></a>
        <a className="auspiciadores__link" href="https://grupolacume.com.pe/"><img src={lacume}
          alt="Grupo Lacume" /></a>
        <a className="auspiciadores__link" href="https://www.facebook.com/caranegratacna/"><img
          src={caranegra} alt="Cara Negra" /></a>
        <a className="auspiciadores__link" href="https://www.facebook.com/caranegratacna/"><img
          src={eroz} alt="Cara Negra" /></a>
      </div>
    </section>
  );
};

export default SectionSponsor;
