import React, { useState, useRef } from "react";
import TodolistRender from "./TodolistRender";

function TodoComponent() {
  const [items, setItems] = useState<string[]>([]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleEdit = (index: number) => {
    const input = inputRefs.current[index];
    if (input) {
      input.disabled = false;
      input.focus();
      input.select();
    }
  };

  const handleDelete = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    delete inputRefs.current[index];
  };

  const handleBlur = (index: number) => {
    const input = inputRefs.current[index];
    const value = input?.value.trim();
    if (value) {
      setItems((prevItems) =>
        prevItems.map((item, i) => (i === index ? value : item))
      );
    }
  };

  return (
    <div className="m-4">
      <form
        className="bg-gray-400 p-4 shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.elements[0] as HTMLInputElement;
          const value = input.value.trim();
          if (value) {
            setItems((prevItems) => [...prevItems, value]);
            input.value = "";
          }
        }}
      >
        <input
          type="text"
          className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a todo item"
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li className="relative" key={index}>
            <input
              type="text"
              defaultValue={item}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              disabled={true}
              onBlur={() => {
                handleBlur(index);
              }}
            />
            <button
              className="btn"
              onClick={() => {
                handleEdit(index);
              }}
            >
              Edit
            </button>
            <button
              className="btn"
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <TodolistRender items={items} />
    </div>
  );
}

export default TodoComponent;
