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
          className="w-full rounded-lg border focus:outline-none focus:ring-2 p-1 focus:ring-sky-400 focus:border-sky-600 focus:border-0 p-1"
        />
        {/* <button className="text-white bg-sky-600 rounded-lg w-7 flex items-center mx-auto h-full p-1 hover:bg-sky-700 active:bg-sky-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </button> */}
      </div>
    </>
  );
};
export default TodoForm;
