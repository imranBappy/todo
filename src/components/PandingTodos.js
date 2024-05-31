"use client";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";
import TodoNotFound from "./TodoNotFound";

const PandingTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
 
  const allPandingTodo = todos?.filter((todo) => !todo.isDone);

  let content = allPandingTodo.map((todo) => (
    <Todo key={todo.id} data={todo} />
  ));

  if (!allPandingTodo?.length) {
    content = <TodoNotFound />;
  }

  return (
    <div
      className=" flex  flex-col
         justify-between
          border-[#6B7280] border flex-grow  rounded-[5px]  
          h-[calc(100vh-100px)]
     basis-[300px]
    "
    >
      <h3 className=" text-center py-2 border-[#6B7280] border-b text-white">
        Task
      </h3>
      <div className="p-3  flex-grow flex flex-col gap-2">{content}</div>
      <AddTodo />
    </div>
  );
};

export default PandingTodos;
