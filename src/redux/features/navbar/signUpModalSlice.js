import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
  }

  export const signUpModalSlice = createSlice({
    name:"signUpModal",
    initialState,
    reducers:{
      SignUpTrue:(state)=>{
            state.value=true
        },
      SignUpFalse:(state)=>{
            state.value=false
        },
    }
  });

// Action creators are generated for each case reducer function
export const {SignUpTrue, SignUpFalse} = signUpModalSlice.actions
export default signUpModalSlice.reducer