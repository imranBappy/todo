"use client";
import { useState } from "react";
import AddEditTodoModal from "./AddEditTodoModal";
const AddTodo = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  const onClose = () => {
    setOpenAddModal(false);
  };

  return (
    <div>
      <div
        onClick={() => setOpenAddModal(true)}
        className="text-center text-green-700 font-serif  
             font-semibold cursor-pointer
            bg-[#222f2081]  border-[#6B7280] border-t
            py-2  rounded-[5px] rounded-t-none
        "
      >
        Add New Todo
      </div>
      <AddEditTodoModal onClose={onClose} open={openAddModal} />
    </div>
  );
};

export default AddTodo;
