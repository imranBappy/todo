"use client";

import Todo from "./Todo";
import { useSelector } from "react-redux";
import TodoNotFound from "./TodoNotFound";
import { useState } from "react";
import Pagination from "./Pagination";
const DoneTodos = () => {

   const todos = useSelector((state) => state.todos.todos);
   const allPandingTodo = todos?.filter((todo) => todo.isDone);

   const limit = 10;
   const [page, setPage] = useState(0);
   const totalPage = Math.ceil(allPandingTodo.length / limit);

   const data = allPandingTodo.slice(limit * page, limit * page + limit);
   const handleNext = () => {
     if (totalPage > page + 1) setPage((preState) => preState + 1);
   };

   const handlePrevious = () => {
     if (page > 0) setPage((preState) => preState - 1);
   };

   let content = data.map((todo) => <Todo key={todo.id} data={todo} />);

   if (!allPandingTodo?.length) {
     content = <TodoNotFound />;
   }
  return (
    <div
      className=" bg-[#222f2081]  flex  flex-col
         justify-between
          border-[#6B7280] border flex-grow  rounded-[5px]  
          min-h-[calc(100vh-100px)]
     basis-[300px]

      "
    >
      <h3 className=" rounded-t-[5px] bg-[#141414] text-center py-2 border-[#6B7280] border-b text-white">
        Done
      </h3>
      <div className="p-3  flex-grow flex flex-col gap-2">{content}</div>

      <Pagination
        page={page}
        totalPage={totalPage}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default DoneTodos;
