import { fetchConToken, fetchSinToken } from '../../fetch'

export const getLogin = async (obj) => {
  const resp = await fetchSinToken('auth/asistente/login', obj, 'POST')
  return resp;
}

export const getUserData = async () => {
  const resp = await fetchConToken('auth/asistente/info');
  return resp;
}

export const getConfirmation = async (obj) => {
  // const resp = await fetchConToken('auth/confirmation', obj, 'POST');
  const url = 'https://ciistacna.com/api/auth/confirmation';
  const { token, ...data } = obj;

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${obj.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return resp;
}