import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/auth.slice';
import ponenteReducer from '../slices/ponentes.slice';
import uiReducer from '../slices/ui.slice';
import asistenciaReducer from '../slices/asistencia.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  ponentes: ponenteReducer,
  ui: uiReducer,
  asistencia: asistenciaReducer,
})

export { rootReducer };