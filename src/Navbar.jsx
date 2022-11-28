import React from "react";

function Navbar() {
  return (
    <>
      <div className=" flex justify-center border py-4  border-gray-500 mt-4">
        <img
          className="w-32 h-32"
          src="https://media.istockphoto.com/id/1442659997/photo/3d-rendering-of-paper-clipboard-management-todo-check-list-with-pencil-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=Pk-C1J80xLVYkp-jTqEo6AQTswAWzaczAIz5RiquDdQ="
        />
        <div className=" border-gray-500 flex justify-center text-6xl font-semibold bg-white">
          TODO
        </div>
      </div>
    </>
  );
}
export default Navbar;
