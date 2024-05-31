"use client";

import Todo from "./Todo";
import AddEditTodo from "./AddTodo";
import { useSelector } from "react-redux";
import TodoNotFound from "./TodoNotFound";
const DoneTodos = () => {
  const todos = useSelector((state) => state.todos.todos);

  const allDoneTodo = todos.filter((todo) => todo.isDone);

  let content = allDoneTodo.map((todo) => <Todo key={todo.id} data={todo} />);

  if (!allDoneTodo?.length) {
    content = <TodoNotFound />;
  }

  return (
    <div
      className=" bg-[#222f2081]  border-[#6B7280] border flex-grow  rounded-[5px]  
h-[calc(100vh-100px)]
     basis-[300px]

      "
    >
      <h3 className=" rounded-t-[5px] bg-[#141414] text-center py-2 border-[#6B7280] border-b text-white">
        Done
      </h3>
      <div className="p-3   flex flex-col gap-2">{content}</div>
    </div>
  );
};

export default DoneTodos;
