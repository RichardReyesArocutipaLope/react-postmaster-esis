import { createSlice } from '@reduxjs/toolkit';
import { getLogin, getUserData } from '../api/auth';
import { getPreinscripcion } from '../api/pre-inscripcion';
import toast from 'react-hot-toast';

const initialState = {
  status: 'checking', // 'not-authenticated', 'authenticated'
  asistencias: [],
  username: null,
  checkingInscripcion: false,
  message: undefined,
  log: 0,
  error: 0,
}

// estas funciones se pueden separar
const fetchStartLogin = (email, password) => async dispatch => {
  try {
    const responseLogin = await getLogin({ email, password });
    const bodyLogin = await responseLogin.json();
    console.log(bodyLogin.token)
    if (bodyLogin.token) {
      localStorage.setItem('Token', `Bearer ${bodyLogin.token}`);
      const responseUserData = await getUserData();
      const bodyUserData = await responseUserData.json();
      console.log(bodyUserData)
      if (bodyUserData.asistencias !== []) {
        dispatch(authLogin());
      }
    } else {
      dispatch(setError())
      // console.log('efe')
    }
  } catch (err) {
    // console.log('aeae')
    // console.log(err)
  }
}

const checkingLogin = () => async dispatch => {
  const token = localStorage.getItem('Token');
  // console.log(token);
  if (token !== null) {
    const resp = await getUserData();
    const body = await resp.json();
    // console.log(body);
    if (resp.status === 200) {
      dispatch(authLogin(body));
      dispatch(setlog())
    } else {
      dispatch(setNotAuthenticated());
    }
  } else {
    dispatch(setNotAuthenticated());
  }
}

const fetchInsciption = (obs) => async dispatch => {
  try {
    const response = await getPreinscripcion(obs);
    // const body = await response.json();
    if (response.status === 201) {
      toast('Revisa tu correo para la confirmacion',
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
      toast('No se pudo enviar al correo',
        {
          icon: '🚨🚨',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      // console.log(body);
    }
  } catch (err) {
    console.log(err)
    toast('Algo salio mal',
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

const setLogout = () => dispatch => {
  try {
    localStorage.clear();
    dispatch(authLogout());
  } catch (err) {
    console.log(err);
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // @deprecated
    authCheckingFinish: (state, action) => { // seria como el finishcheckingAuth 
      state.status = 'checking'
      state.asistencias = [];
      state.username = null;
      state.checkingInscripcion = false;
    },
    // ta bien
    setNotAuthenticated: (state) => {
      state.status = 'not-authenticated';
    },
    authLogin: (state, { payload }) => { // seria como el startcheckingAuth 
      state.status = 'authenticated';
      state.asistencias = payload.asistencias;
      state.username = payload.fullName;
    },
    authLogout: (state, action) => {
      state.status = 'checking';
      state.asistencias = [];
      state.username = null;
      state.checkingInscripcion = false;
      state.message = undefined;
      state.log = 0;
      state.error = 0;
    },
    startPreinscripcion: (state, action) => {
      state.checkingInscripcion = true;
    },
    finisPreInscripcion: (state, action) => {
      state.checkingInscripcion = false;
    },
    setlog: (state, action) => {
      state.log += 1;
    },
    setError: (state, action) => {
      state.error += 1;
    },
    setAsistencia: (state, { payload }) => {
      state.asistencias = state.asistencias.map((e, index) => {
        if (e.id === payload) e.bol_asistio = 1; //payload = id 
        return e;
      })
    }
  }
})

// No me gusta, lo mejor seria ponerlo en archivo aparte
export { fetchStartLogin, setLogout, checkingLogin, fetchInsciption };
export const { authCheckingFinish, authLogin, authLogout, setNotAuthenticated, setlog, setError, setAsistencia } = authSlice.actions;
export default authSlice.reducer;