import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isAsistenciaModalOpen: false
  },
  reducers: {
    onOpenAsistenciaModal: (state) => {
      state.isAsistenciaModalOpen = true;
    },
    onCloseAsistenciaModal: (state) => {
      state.isAsistenciaModalOpen = false;
    }
  }
});

export const { onOpenAsistenciaModal, onCloseAsistenciaModal } = uiSlice.actions;
export default uiSlice.reducer;