import './Pagos.css';
import imgInterbank from '../../assets/img/payment/Interbank_Logo.jpg';
import imgYape from '../../assets/img/payment/Yape.png';

export const Pagos = () => {
  return (
    <div className='body'>
      <div className="end">
        <div className="validation-pago">
          <div className="validation-pago__title">
            <h1>
              <div className="validation-pago__xix">
                <span>&lt;XIX&gt;</span>
              </div>
              <div className="validation-pago__post">
                <span>POST-MASTER</span>
              </div>
            </h1>
            <p><span className="lined"></span>"Encuentro de egresados"</p>
          </div>
          <div className="validation-pago__success">
            <h2>¡Felicidades!</h2>
            <div className="validation-pago__message">Su registro ha sido completado con éxito, se enviará un correo
              electrónico de recordatorio el día del evento con los datos necesarios
              para su asistencia. Hasta entonces!</div>
          </div>
          <div className="validation-pago__success">
            <h2>Instrucciones para obtener el certificado</h2>
            <div className="validation-pago__message">
              Para obtener el certificado deberas tener por lo menos 5 asistencias, el costo del certificado es de
              S/. 10.00 nuevos soles
            </div>
            <div className="validation-pago__message">
              <br />Para el pago del certificado lo pueden realizar al yape o cuenta interbank (es importante que este
              al nombre del titular) y enviar el comprobante al correo <b>ciistacna@unjbg.edu.pe</b> con el siguiente
              asunto : <br /><br />
              <b>CERTIFICADO:
                POST-MASTER 2022 </b>y detallar en la descripción del correo <b>APELLIDOS Y NOMBRES</b> y el número de
              <b>DNI</b>.
              <br /><br /> NOTA: Según envie sus datos por correo se registrará en su certificado.<br />
            </div>
            <div className="validation-pago__message">
              <br /> * Si desea mayor información puede comunicarse con nosotros a través de nuestra pagina de facebook
              con el siguiente <a style={{ textDecoration: 'none', color: '#9e9e9e' }}
                href="https://www.facebook.com/ciistacna/"><b>enlace</b></a><br />
              <br /> El horario de
              atención es de 9 a.m. - 6 p.m.
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="payment__yape3">
            <div className="payment__yape2">
              <div className="payment__yape1">
                <img className="payment__yape" src={imgYape} alt="" />
              </div>
            </div>
          </div>
          <div className="payment__interbank">
            <img className="payment__interbank-img" src={imgInterbank} alt="" />
            <h1>Cuenta Simple</h1>
            <div>
              <h2>N de cuenta</h2>
              <p>8983318947467</p>
            </div>
            <div>
              <h2>Código CCI</h2>
              <p>00389801331894746748</p>
            </div>
            <div>
              <h2>Moneda</h2>
              <p>Soles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}