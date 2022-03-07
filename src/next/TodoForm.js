const TodoForm = () => {
  return (
    <>
      <label htmlFor="input" className="text-sm font-light text-slate-500">
        Input Todo
      </label>
      <div className="flex items-center my-1">
        <input
          id="input"
          type="text"
          className="w-full p-1 transition-all duration-150 border rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-600"
        />
        <button
          id="btn"
          className="flex items-center h-full p-1 mx-auto text-white rounded-lg bg-sky-600 w-7 hover:bg-sky-700 active:bg-sky-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
export default TodoForm;
