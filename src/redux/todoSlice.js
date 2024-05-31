"use client";

import { createSlice } from "@reduxjs/toolkit";
import { dbRead, dbWrite } from "@/utils/db";

const initialState = {
  todos: dbRead() || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { id } = action.payload;
      const isExist = state.todos.find((item) => item.id === id);
      if (!isExist) {
        state.todos.push(action.payload);
      }
      dbWrite(state);
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
   
      const todos = state.todos.filter((item) => item.id !== id);
      state.todos = todos;

      dbWrite(state);
    },
    editTodo: (state, action) => {
      const { id } = action.payload;
      const todos = state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
      state.todos = todos;
      dbWrite(state);
    },
  },
});

export default todoSlice.reducer;

export const { addAllTodo, addTodo, deleteTodo, editTodo } = todoSlice.actions;
