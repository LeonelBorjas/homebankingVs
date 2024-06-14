import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducciones/authReducer";


export const store = configureStore({
    reducer:{
        //TODO: agregar reductores
        authReducer
    },
})