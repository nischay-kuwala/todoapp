import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
const ShowTodo = (props) => {
  const { task, onChange, check, deleteTodo, id } = props;

  const onClick = () => {
    onChange(task);
  };
  const Delete = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex bg-white rounded-md px-4 py-2 space-x-2 border m-4 border-gray-300">
      <div className="flex items-center justify-center">
        <input checked={check} type="checkbox" onChange={onClick} />
      </div>
      <h4 className="flex items-center text-gray-700 grow font-semibold ">
        {task}
      </h4>

      <button className="w-10 p-2 " onClick={Delete}>
        <AiOutlineDelete className="text-2xl" />
      </button>
    </div>
  );
};
export default ShowTodo;
