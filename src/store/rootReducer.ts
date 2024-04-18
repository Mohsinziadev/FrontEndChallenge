import { combineReducers } from "@reduxjs/toolkit";
import app from "./main/appSlice";
import article from "./main/article/articleSlice";

const reducer = combineReducers({
  article,
  app,
  // here we will be adding reducers
});
export default reducer;
