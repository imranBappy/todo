"use client";
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice";
const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.ceil(999999 + Math.random() * 10000);
    const isDone = false;

    const newTodo = {
      id: id,
      isDone: isDone,
      ...todo,
    };

    dispatch(addTodo(newTodo));
    
    setTodo({
      title: "",
      description: "",
    });
    setOpen(false);
  };

  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="text-center text-green-700 font-serif  
             font-semibold cursor-pointer
            bg-[#222f2081]  border-[#6B7280] border-t
            py-2  rounded-[5px] rounded-t-none
        "
      >
        Add New Todo
      </div>
      <Modal title="New Todo" open={open} onClose={() => setOpen(false)}>
        <div>
          <div className="p-4 md:p-5 space-y-4">
            <form onSubmit={handleSubmit}>
              <div class="mb-6">
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Title
                </label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  className="bg-black text-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Write your task title"
                  required
                  value={todo["title"]}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-6">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  type="text"
                  className="bg-black text-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Write your task details"
                  required
                  rows={5}
                  value={todo["description"]}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddTodo;
