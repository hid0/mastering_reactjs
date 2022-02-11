import { useState } from "react";

const Button = ({ text }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <button onClick={handleClick}>
      {text} {counter}
    </button>
  );
};

export default Button;
