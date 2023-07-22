import { fetchConToken } from '../../fetch';

// obj = { id_asistencia: xx, codigo_asistencia: "asd" }
export const getMarcarAsistencia = async (obj) => {
  const resp = await fetchConToken('asistentes/marcar', obj, 'POST');
  return resp;
}