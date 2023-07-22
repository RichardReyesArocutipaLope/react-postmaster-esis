import './Validation.css';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Fail } from '../Fail/Fail';
import { useForm } from '../../hooks/useForm';
import { getConfirmation } from '../../api/auth';

export const Validation = () => {

  const query = new URLSearchParams(useLocation().search);
  const qToken = query.get('token');
  const navigate = useNavigate();

  if (!qToken) {
    return <Fail />
  };

  // Estado para el Formulario
  const [values, onChangeInput, reset] = useForm({
    codigoUniv: '',
    passwordUno: '',
    passwordDos: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { codigoUniv, passwordUno, passwordDos } = values;
    if (passwordUno === '' || passwordUno.length < 8) {
      toast('Contraseñia vacia y con menos de  caracteres',
        {
          icon: '🚨🚨',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      alert('La contrasenia no debe estar vacio y tampoco ser menos de 8 caracteres');
    } else if (passwordDos === '' || passwordUno !== passwordDos) {
      alert('Las contrasenias no coinciden');
    } else {
      const resp = await getConfirmation({ codigoUniv, password: passwordUno, token: qToken });
      const body = resp.json();
      if (resp.status === 201) {
        navigate('/pagos');
      } else {
        toast('Ocurrio un error',
          {
            icon: '🚨🚨',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
      }
    }
  }

  return (
    <>
      <div className='body'>
        <div className="validation">
          <div className="validation__title">
            <h1>
              <div className="validation__xix">
                <span>&lt;XIX&gt;</span>
              </div>
              <div className="validation__post">
                <span>POST-MASTER</span>
              </div>
            </h1>
            <p><span className="lined"></span>"Encuentro de egresados"</p>
          </div>
          <div className="validation__form">
            <h2>Formulario de inscripción</h2>
            <form id="form" action="#" onSubmit={handleSubmit}>
              <span>
                <i
                >Si usted es estudiante de la Universidad Nacional Jorge Basadre
                  Grohmann, introduzca su código universitario, en su defecto deje
                  este campo vacío.</i
                >
              </span>
              <span>
                <input
                  type="text"
                  id="code"
                  className="validation__input"
                  name='codigoUniv'
                  value={values.codigoUniv}
                  onChange={onChangeInput}
                  placeholder="Código universitario"
                  autoComplete="off"
                />
              </span>
              <span>
                <i
                >Introduzca una contraseña válida, esta servirá posteriormente
                  para marcar la asistencia de cada ponencia y recibir su
                  certificado de superar el 80% de asistencias.</i
                >
              </span>
              <span>
                <input
                  type="password"
                  id="pass"
                  className="validation__input"
                  name='passwordUno'
                  onChange={onChangeInput}
                  value={values.passwordUno}
                  placeholder="* Contraseña"
                  autoComplete='off'
                />
              </span>
              <span>
                <input
                  type="password"
                  id="rpass"
                  onChange={onChangeInput}
                  value={values.passwordDos}
                  name='passwordDos'
                  className="validation__input"
                  placeholder="* Repetir contraseña"
                  autoComplete='off'
                />
              </span>
              <span>
                <input type="submit" className="validation__submit" value="Enviar" />
              </span>
            </form>
          </div>
        </div>
      </div >
    </>
  );
};
