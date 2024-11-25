"use client";
import { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal";
import { BiSolidShow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "@/redux/todoSlice";
import { CiEdit } from "react-icons/ci";
import AddEditTodoModal from "./AddEditTodoModal";

const Todo = ({ data }) => {
  const { isDone = false, title = "", description = "" } = data;
  const [openShowModal, setOpenShowModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();

  const handleTodoDone = (todo) => {
    const updatedTodo = {
      ...todo,
      isDone: true,
    };
    dispatch(editTodo(updatedTodo));
  };
  const handleTodoDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const handlEditModelClose = () => {
    setOpenEditModal(false);
  };

  return (
    <>
      <div className="border-[#6B7280]  bg-[#141414] border text-white py-2 rounded-[5px] flex gap-3 ">
        <h4
          onClick={() => setOpenShowModal(true)}
          className=" cursor-pointer line-clamp-1 mx-3 font-serif font-normal flex-grow "
        >
          {title}
        </h4>
        <div className="flex gap-1 ">
          <span className=" border border-[#6B7280] rounded-[3px] bg-black  cursor-pointer flex items-center px-1 ">
            {isDone ? (
              <BiSolidShow onClick={() => setOpenShowModal(true)} />
            ) : (
              <CiEdit onClick={() => setOpenEditModal(true)} />
            )}
          </span>
          <span className=" border border-[#6B7280] rounded-[3px] bg-black  cursor-pointer flex items-center  px-1  mr-2">
            {isDone ? (
              <MdDelete
                onClick={() => handleTodoDelete(data)}
                style={{ color: "red" }}
              />
            ) : (
              <IoMdDoneAll
                onClick={() => handleTodoDone(data)}
                style={{ color: "green" }}
              />
            )}
          </span>
        </div>
      </div>

      <AddEditTodoModal
        onClose={handlEditModelClose}
        open={openEditModal}
        data={data}
      />
      <Modal
        title={title}
        open={openShowModal}
        onClose={() => setOpenShowModal(false)}
      >
        <div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-300 ">
              {description || <span >Description not found!</span> }
            </p>
          </div>
          <div className="flex  justify-end p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button
              onClick={() => setOpenShowModal(false)}
              data-modal-hide="default-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none   bg-red-600/10 rounded-lg border border-red-800 hover:bg-red-700 hover:text-white  "
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Todo;
