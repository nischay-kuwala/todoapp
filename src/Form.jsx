import React from "react";

function Form({
  handleSaveTask,
  handleOnChange,
  task,
  disabled,
  setTodoStatus,
}) {
  return (
    <>
      <form
        onSubmit={handleSaveTask}
        className="flex flex-col p-4 space-y-4 border border-gray-500 shadow-md  rounded-md m-4"
      >
        <h3 className="font-semibold">Create a todo</h3>
        <input
          className="border border-gray-500 rounded-md px-2 py-1 "
          placeholder="Write an article about XState"
          value={task}
          onChange={handleOnChange}
          name="todo"
          id="todo"
        />
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={disabled}
            className=" disabled:bg-yellow-200 bg-yellow-400 px-2 py-1 text-white border-2 rounded-md focus:ring focus:outline-none focus:border-yellow-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setTodoStatus(false)}
            className="px-2 py-1 bg-white rounded-md border-2 focus:ring focus:outline-none focus:ring-yellow-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
