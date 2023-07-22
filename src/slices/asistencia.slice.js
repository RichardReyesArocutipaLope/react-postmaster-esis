import { getMarcarAsistencia } from '../api/asistencia';
import toast from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import { setAsistencia } from './auth.slice';

const initialState = {
  status: 'initial', // 'checking', 'ok', 'error', 'initial'
  message: undefined,
}

const fetchMarcar = (id, code) => async dispatch => {
  try {
    dispatch(setStatusChecking());
    const responseMarcar = await getMarcarAsistencia({
      codigo_asistencia: code,
      id_asistencia: id
    });
    const bodyMarcar = responseMarcar.json();
    if (responseMarcar.status === 201) {
      dispatch(setOk(bodyMarcar));
      dispatch(setAsistencia(id));
      toast('Asistencia Marcada',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    } else {
      dispatch(setFail({
        // lo mas optimo es que este mensaje venga del backend
        message: 'No se puede marcar la asistencia',
      }));
      toast('Código incorrecto',
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
  } catch (err) {
    debugger;
  }
}

const AsistenciaSlice = createSlice({
  name: 'asistencia',
  initialState,
  reducers: {
    setFail: (state, { payload }) => {
      state.status = 'fail';
      state.message = 'No se puede marcar la asistencia';
    },
    setOk: (state, { payload }) => {
      state.status = 'ok';
      state.message = payload.message;
    },
    setStatusChecking: (state) => {
      state.status = 'checking';
    },
    setStatusInitial: (state) => {
      state.status = 'initial';
    }
  }
})

export { fetchMarcar };
export const { setFail, setOk, setStatusChecking, setStatusInitial } = AsistenciaSlice.actions;
export default AsistenciaSlice.reducer;