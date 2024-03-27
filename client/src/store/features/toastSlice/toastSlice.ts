import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TYPE_TOAST, IToast } from "../../../utils/types/toast";

const initialState: IToast = {
  message: "",
  type: TYPE_TOAST.SUCCESS,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast(state, action: PayloadAction<IToast>) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearToast(state) {
      state.message = "";
      state.type = TYPE_TOAST.SUCCESS;
    },
  },
});

export const toastReducer = toastSlice.reducer;
export const { setToast, clearToast } = toastSlice.actions;
