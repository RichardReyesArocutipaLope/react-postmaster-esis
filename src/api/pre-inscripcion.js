import { fetchSinToken } from '../../fetch';

export const getPreinscripcion = async (obj) => {
  const resp = await fetchSinToken('auth/preinscripcion', obj, 'POST');
  return resp;
}