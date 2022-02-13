import { useState, useEffect } from "react";

let TimeElapsed = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSeconds((detik) => detik + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{seconds} detik</div>;
};
export default TimeElapsed;
