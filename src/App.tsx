import "./App.css";
import TodoComponent from "./components/TodoComponent";
import TestComponent1 from "./components/TestComponent1";
import FormComponent from "./components/FormComponent";
import InfiniteScroll from "./components/InfiniteScroll";
import DebounceInput from "./components/DebounceInput";
import WindowWidth from "./components/WindowWidth";

function App() {
  return (
    <div className="App flex flex-row flex-wrap">
      <div className="w-1/4">
        <TestComponent1 />
      </div>
      <div className="w-1/2">
        <TodoComponent />
      </div>

      <div className="w-full m-2 justify-center flex">
        <FormComponent />
      </div>

      <div className="w-full m-2 justify-center flex">
        <DebounceInput />
      </div>

      <div className="w-full m-2 justify-center flex">
        <WindowWidth />
      </div>

      <div className="w-full m-2 justify-center flex">
        <FormComponent />
      </div>

      <div className="w-full m-2 justify-center flex">
        <FormComponent />
      </div>

      <div className="w-full justify-center flex">
        <InfiniteScroll />
      </div>
    </div>
  );
}

export default App;
