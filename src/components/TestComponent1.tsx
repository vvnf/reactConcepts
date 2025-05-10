import React, { useState } from "react";

function TestComponent1() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-500 m-4 rounded-md shadow-md">
      <div>The counter will be between 0-10-</div>
      <div>Count {count}</div>
      <div className="flex flex-row flex-wrap gap-1 justify-center">
        <button
          className="btn"
          onClick={() =>
            setCount((count: number) => {
              if (count < 10) {
                return count + 1;
              }
              return count;
            })
          }
        >
          +
        </button>
        <button
          className="btn"
          onClick={() =>
            setCount((count: number) => {
              if (count > 0) {
                return count - 1;
              }
              return count;
            })
          }
        >
          -
        </button>
        <button className="btn w-1/2" onClick={() => setCount(() => 0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TestComponent1;
