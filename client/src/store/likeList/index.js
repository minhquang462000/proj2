import { createSlice } from "@reduxjs/toolkit";
import { stringify } from "postcss";

const LikeList = createSlice({
  name: "likeList",
  initialState: {
    likeList: localStorage.getItem("likeList")
      ? JSON.parse(localStorage.getItem("likeList"))
      : [],
  },
  reducers: {
    AddToLikeListPage: (state, action) => {
      const itemPush = action.payload;

      // if (state.likeList.length === 0) {
      //   state.likeList.push({ ...itemPush, had: true });
      // } else {
      const idItem = state.likeList.map((item) => item.id);
      if (idItem.includes(itemPush.id)) {
        alert("Đã có trong danh sách yêu thích");
      } else {
        state.likeList.push(itemPush);
        alert("Đã thêm vào yêu thích");
      }
      // }
      localStorage.setItem("likeList", JSON.stringify(state.likeList));
      return state;
    },
    DeleteItem: (state, action) => {
      const id = action.payload;
      state.likeList = state.likeList.filter((item) => item.id !== id);
      localStorage.setItem("likeList", JSON.stringify(state.likeList));
      return state;
    },
  },
});

export const { AddToLikeListPage, DeleteItem } = LikeList.actions;
export default LikeList.reducer;
