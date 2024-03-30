import {configureStore} from "@reduxjs/toolkit";
import navDropDownReducer from '../features/navbar/navDropDownSlice'

export const store = configureStore({
    reducer:{
        navDropDown:navDropDownReducer
    },
});