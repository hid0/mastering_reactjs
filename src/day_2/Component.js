import { useState, useEffect } from "react";

const Component = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);
  }, [counter]);

  return <div>{counter}</div>;
};

export default Component;
