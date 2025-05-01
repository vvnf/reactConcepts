type TodoListRenderProps = {
  items: string[];
};

function TodolistRender({ items }: TodoListRenderProps) {
  return (
    <div className="flex flex-col right-0 top-0 bg-white text-black p-8 shadow-lg shadow-indigo-500/50">
      <h2>Todo List Count : {items.length}</h2>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default TodolistRender;
