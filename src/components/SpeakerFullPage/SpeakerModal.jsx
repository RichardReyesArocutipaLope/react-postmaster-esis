import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { fetchMarcar, setStatusInitial } from "../../slices/asistencia.slice";
import { onCloseAsistenciaModal } from "../../slices/ui.slice";
import Swal from "sweetalert2";

export const SpeakerModal = ({ id }) => {
  const dispatch = useDispatch();
  const { isAsistenciaModalOpen } = useSelector((state) => state.ui);
  const { status, message } = useSelector((state) => state.asistencia);
  const [values, handleInputChange, reset] = useForm({
    code: "",
  });

  useEffect(() => {
    if (status === "ok") {
      dispatch(onCloseAsistenciaModal());
      dispatch(setStatusInitial());
    }
  }, [status]);

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(fetchMarcar(id, values.code));
  };

  const handleClose = (e) => {
    dispatch(onCloseAsistenciaModal());
  };

  const mostrarAlerta = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      footer: "help: +51 955014274",
      background: '#0F203D',
      color: '#fff',
    });
  };

  useEffect(() => {
    if (status === "fail") {
      mostrarAlerta(message);
      handleClose()
      dispatch(setStatusInitial());
    }
  }, [status]);

  return (
    <div
      className={`day-schedule__mblur ${
        isAsistenciaModalOpen ? "day-schedule__mblur-active" : ""
      }`}
    >
      <div className="day-schedule__modal flx-ja-cc">
        <form className="modal__presence">
          <div className="login__item">
            <label className="login__label" htmlFor="text">
              Ingrese el código
            </label>
            <input
              className="login__input"
              type="text"
              name="code"
              id="text"
              value={values.code}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div className="modal__buttons">
            <div className="modal__button">
              <input
                className="modal__button"
                type="submit"
                value="Aceptar"
                onClick={handleSend}
              ></input>
            </div>
            <div
              className="modal__button modal__button--cancelar"
              onClick={handleClose}
            >
              Cancelar
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
