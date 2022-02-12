import { useState, useEffect } from "react";

const Editing = () => {
  let [text, setText] = useState("");
  const [seconds, setSeconds] = useState(0);

  useEffect(function () {
    // console.log("sinkronisasi ke local storage");
    if (text.length) localStorage.setItem("edit-text", text);
  });

  useEffect(function () {
    setText(localStorage.getItem("edit-text"));
    let intervalId = setInterval(() => {
      setSeconds((second) => second + 1);
    }, 1000);

    return function () {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik
      <br />
      <br />
      <textarea
        name=""
        id="text"
        cols="30"
        rows="10"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

export default Editing;
