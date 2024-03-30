import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
  }

  export const navDropDownSlice = createSlice({
    name:"navDropDown",
    initialState,
    reducers:{
        NavDropDown:(state)=>{
            state.value=!state.value
        },
    }
  });

// Action creators are generated for each case reducer function
export const {NavDropDown} = navDropDownSlice.actions
export default navDropDownSlice.reducer