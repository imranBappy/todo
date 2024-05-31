"use client";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "@/redux/todoSlice";

const AddEditTodoModal = ({ open, onClose, data = undefined }) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: null,
    isDone: false,
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

    const newTodo = {
      ...todo,
      id: todo?.id || id,
      isDone: todo.isDone,
    };
    if (data) {
      dispatch(editTodo(newTodo));
    } else {
      dispatch(addTodo(newTodo));
    }

    setTodo({
      id: null,
      isDone: false,
      title: "",
      description: "",
    });
    onClose();
  };

  useEffect(() => {
    if (data) {
      setTodo(data);
    }
  }, [data]);

  return (
    <Modal title="New Todo" open={open} onClose={onClose}>
      <form className="p-4 md:p-5 space-y-4" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-white"
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

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-white"
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddEditTodoModal;
