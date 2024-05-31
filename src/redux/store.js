"use client";
import todoReducer from "./todoSlice.js";
import { configureStore } from "@reduxjs/toolkit";
export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todoReducer,
    },
  });
};

export default makeStore;
