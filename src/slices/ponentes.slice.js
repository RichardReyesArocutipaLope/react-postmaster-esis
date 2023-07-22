import { createSlice } from '@reduxjs/toolkit';
import { getPonentes } from '../api/ponentes';

const initialState = {
  checkingPonentes: true,
  ponentes: null,
}

const fetchPonentes = () => async dispatch => {
  try {
    const responsePonentes = await getPonentes();
    const bodyPonentes = await responsePonentes.json();
    // console.log(bodyPonentes);
    if (!bodyPonentes.statusCode) {
      dispatch(loadPonentes(bodyPonentes));
    } else {
      alert('No se pudo cargar los ponentes')
    }
  } catch (err) {
    // console.log(err);
    debugger;
  }
}

const ponenteSlice = createSlice({
  name: 'ponentes',
  initialState,
  reducers: {
    loadPonentes: (state, action) => {
      state.ponentes = action.payload;
      state.checkingPonentes = false;
    },
  }
})

export { fetchPonentes };
export const { loadPonentes } = ponenteSlice.actions;
export default ponenteSlice.reducer;