import {configureStore} from "@reduxjs/toolkit";
import navDropDownReducer from '../features/navbar/navDropDownSlice'
import logInModalReducer from '../features/navbar/logInModalSlice'

export const store = configureStore({
    reducer:{
        navDropDown:navDropDownReducer,
        logInModal:logInModalReducer,
    },
});