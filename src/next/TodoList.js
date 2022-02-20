import TodoForm from "./TodoForm";

function reducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      let nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      return [...todos, { id: nextId, completed: false, ...action.text }];
    case "REMOVE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
    case "UPDATE_TODO":
      return todos.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return todos;
  }
}

const Todo = () => {
  return (
    <div className="mx-auto bg-white rounded-md w-96 h-60 shadow p-4">
      <div className="">
        <h1 className="text-3xl text-center font-semibold uppercase">Todo</h1>
        <TodoForm />
      </div>
    </div>
  );
};
export default Todo;

/*
  dispatch({
  type: 'ADD_TODO',
  todo: {
    title: 'Belajar hooks'
  }
})
dispatch({
  type: "REMOVE_TODO", 
  id: 10 // <--- sesuai ID todo yang ingin dihapus
})
dispatch({
   type: 'UPDATE_TODO', 
   todo: {
     id: 10, // <--- sesuai todo yang ingin diupdate
     title: 'Judul todo baru',
     // ... dst data lainnya
   }
})
dispatch({
   type: 'TOGGLE_COMPLETED', 
   id: 10 // <---- sesuai ID todo yang ingin di _toggle_
})
 **/
