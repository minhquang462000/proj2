import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth";
import SettingReducer from "./setting";
import LikeListReducer from "./likeList"

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    setting: SettingReducer,
    likeList: LikeListReducer,
  
  },
});

export default store;
