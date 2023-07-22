import './Fail.css';

export const Fail = () => {
  return (
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
        <div className="validation__success">
          <h2>Algo salió mal...!!</h2>
          <span className="validation__message"
          >Es muy raro que suceda un error en este punto del proceso, por favor
            intenta abrir nuevamente el formulario desde tu correo y completa el
            formulario, si el problema persiste, ponte en contacto con
            nosotros.</span
          >
        </div>
      </div>
    </div>
  );
};