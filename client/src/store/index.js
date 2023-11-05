import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth"
import SettingReducer from "./setting"



const store =configureStore({
    reducer:{
        auth: AuthReducer,
        setting:SettingReducer
    }
})


export default store