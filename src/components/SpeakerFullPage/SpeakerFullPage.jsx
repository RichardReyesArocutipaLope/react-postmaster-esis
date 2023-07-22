import React, { useState, useEffect } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./SpeakerFullPage.css";
import { useDispatch, useSelector } from 'react-redux';
import { SpeakerModal } from './SpeakerModal';
import { onOpenAsistenciaModal } from '../../slices/ui.slice';
import { FiLock } from "react-icons/fi";
import { VscCheck } from "react-icons/vsc";

const SpeakerFullPage = () => {
  const { asistencias, status } = useSelector((state) => state.auth);
  // console.log(datos);
  const dispatch = useDispatch();
  const { isAsistenciaModalOpen } = useSelector((state) => state.ui);
  // se tiene que utilizar el ponente.asistencia_activo

  const handleClick = () => {
    dispatch(onOpenAsistenciaModal())
  }
  let contador = 0

  return (
    <>
      {status === "authenticated" && (
        <Fullpage>
          <FullpageNavigation />
          <FullPageSections>
            {status === "authenticated" &&
              asistencias.map(({ ponente, id, bol_asistio }, index) => {
                contador++;
                return (
                  // <SpeakerFullPage key={index} datos={data} />
                  <div key={index}>
                    <FullpageSection>
                      <div style={{ position: "relative" }}>
                        <div className="speaker-full-wrapper section-xl flx-ja-cc">
                          <div className="speaker-full flx-ja-cc">
                            <div className="speaker-full__img">
                              <img src={ponente.foto} alt="" />
                              <div className="speaker-full__shadow"></div>
                            </div>
                            <div className="speaker-full__info">
                              <p className="speaker-full__title ponente-xd">
                                Ponente {`0${contador}`}
                              </p>
                              <h2 className="speaker-full__name">
                                {ponente.fullName}
                              </h2>
                              <h3 className="speaker-full__title">{`<${ponente.tituloPonencia}>`}</h3>
                              <div className="speaker-full__description-wrapper">
                                <p className="speaker-full__description">
                                  {ponente.descripcion}
                                </p>
                              </div>
                            </div>
                          </div>

                          {bol_asistio === 1 ? (
                            <div className="speaker-full__presence asistido">
                              <button>Asististe</button>
                            </div>
                          ) : (
                            <div className="speaker-full__presence">
                              <button onClick={handleClick}>Asistencia</button>
                            </div>
                          )}
                        </div>
                        {/* modal */}
                        {isAsistenciaModalOpen && <SpeakerModal id={id} />}
                      </div>
                    </FullpageSection>
                  </div>
                );
              })}
          </FullPageSections>
        </Fullpage>
      )}
    </>
  );
};

export default SpeakerFullPage;
