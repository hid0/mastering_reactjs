import React, { useState } from "react";

const useToggle = function () {
  const [value, toggle] = useState("OFF");

  return [value, toggle];
};

const App = () => {
  let [statusLampu, toggleLampu] = useToggle();
  return (
    <>
      <div>lampu saat ini : {statusLampu}</div> <br />
      <button onClick={(e) => toggleLampu()}>Saklar</button>
    </>
  );
};

export default App;
