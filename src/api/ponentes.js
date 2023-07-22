import { fetchSinToken } from '../../fetch'

export const getPonentes = async (obs) => {
  const resp = await fetchSinToken('ponente')
  return resp;

}
