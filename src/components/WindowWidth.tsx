import useWindowWidth from "../customHooks/useWindowWidth";

function WindowWidth() {
  const width = useWindowWidth();

  return (
    <div className="w-1/2 bg-gray-400 p-4 rounded-md shadow-md">
      <h2>
        Custom Hooks Concepts- Generraly Used when we have to merge 2 react
        hooks Try Resizing the window
      </h2>
      <h3 className="text-lg font-bold">Window Width: {width}px</h3>
    </div>
  );
}

export default WindowWidth;
