import React from "react";
import Child from "./next/components/Child";

let TemaSitus = React.createContext("light");

const App = (props) => {
  return (
    <div>
      <TemaSitus.Provider value="light">
        <Child />
      </TemaSitus.Provider>
    </div>
  );
};

export default App;
