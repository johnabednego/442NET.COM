import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
  }

  export const logInModalSlice = createSlice({
    name:"logInModal",
    initialState,
    reducers:{
      LogInTrue:(state)=>{
            state.value=true
        },
      LogInFalse:(state)=>{
            state.value=false
        },
    }
  });

// Action creators are generated for each case reducer function
export const {LogInTrue, LogInFalse} = logInModalSlice.actions
export default logInModalSlice.reducer