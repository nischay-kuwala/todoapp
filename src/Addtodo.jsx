import React, { useState, useEffect } from "react";
import ShowTodo from "./ShowTodo";
import Form from "./Form";
import { GrFormAdd } from "react-icons/gr";
function AddTodo() {
  const previousTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const previousMarkTodos = JSON.parse(
    localStorage.getItem("markTodos") || "[]"
  );
  const [task, setTask] = useState("");
  const [data, setData] = useState(previousTodos);
  const [todoStatus, setTodoStatus] = useState(false);
  const [doneList, setDoneList] = useState(previousMarkTodos);
  const [disabled, setDisabled] = useState(true);

  console.log("newTask", data);
  const handleOnChange = (event) => {
    const newTask = event.target.value;
    if (newTask == " ") {
      return;
    }
    setTask(newTask);
  };
  const handleSaveTask = () => {
    console.log("save");
    event.preventDefault();
    setData([...data, task]);
    localStorage.setItem("todos", JSON.stringify([...data, task]));
    setTask("");
    setTodoStatus(false);
  };

  useEffect(() => {
    if (task == "") {
      setDisabled(true);
    } else if (task.length > 0) {
      setDisabled(false);
    }
  }, [task]);

  const handleTodo = () => {
    setTodoStatus(true);
  };
  function markAsDone(todo) {
    setDoneList([...doneList, todo]);
    localStorage.setItem("markTodos", JSON.stringify([...doneList, todo]));
    const newTodo = data.filter((t) => t !== todo);
    setData([...newTodo]);
    localStorage.setItem("todos", JSON.stringify([...newTodo]));
  }

  function markAsNotDone(todo) {
    setData([...data, todo]);
    localStorage.setItem("todos", JSON.stringify([...data, todo]));
    const oldTodo = doneList.filter((t) => t !== todo);
    setDoneList([...oldTodo]);
    localStorage.setItem("markTodos", JSON.stringify([...oldTodo]));
  }

  const deleteTodo = (id) => {
    const todos = data.filter((t) => t !== id);
    setData([...todos]);
    localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  const deleteMarkedTodo = (id) => {
    const markedTodos = doneList.filter((t) => t !== id);
    setDoneList([...markedTodos]);
    localStorage.setItem("markTodos", JSON.stringify([...markedTodos]));
  };

  return (
    <>
      {" "}
      <h4 className="font-semibold pl-4">Things to do </h4>
      {data.length === 0 && (
        <div className="pl-4 text-gray-500">No todos here.</div>
      )}
      {data &&
        data.map((item) => (
          <ShowTodo
            id={item}
            key={item}
            task={item}
            check={false}
            onChange={markAsDone}
            deleteTodo={deleteTodo}
          />
        ))}
      {!todoStatus ? (
        <button
          onClick={handleTodo}
          className="m-4 border-2  items-center rounded-full bg-yellow-400 py-1 flex px-2 text-white md:text-2xl "
        >
          <GrFormAdd className="text-2xl text-white" />
          Add a todo
        </button>
      ) : (
        <Form
          handleSaveTask={handleSaveTask}
          handleOnChange={handleOnChange}
          task={task}
          disabled={disabled}
          setTodoStatus={setTodoStatus}
        />
      )}
      <h4 className="font-semibold pl-4">Things done </h4>
      {doneList.length === 0 && (
        <div className="pl-4 text-gray-500">No todos here.</div>
      )}
      {doneList.map((item) => (
        <ShowTodo
          id={item}
          key={item}
          task={item}
          check={true}
          onChange={markAsNotDone}
          deleteTodo={deleteMarkedTodo}
        />
      ))}
    </>
  );
}
export default AddTodo;
