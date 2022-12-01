import React from "react";
import AddTodo from "./Addtodo";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="space-y-4">
      <Navbar />
      <h2 className=" p-4 text-4xl font-semibold">Things to get done</h2>
      <AddTodo />
    </div>
  );
}

export default App;
