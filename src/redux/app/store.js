import {configureStore} from "@reduxjs/toolkit";
import navDropDownReducer from '../features/navbar/navDropDownSlice'
import logInModalReducer from '../features/navbar/logInModalSlice'
import signUpModalReducer from '../features/navbar/signUpModalSlice'

export const store = configureStore({
    reducer:{
        navDropDown:navDropDownReducer,
        logInModal:logInModalReducer,
        signUpModal:signUpModalReducer,
    },
});