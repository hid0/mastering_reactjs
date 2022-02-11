import { useEffect, useState } from "react";

const Editing = () => {
  const [text, setText] = useState("");

  useEffect(function () {
    if (text.length) localStorage.setItem("edit-text", text);
  });

  return (
    <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
  );
};

export default Editing;
/*
in this file learn about state
useEffect
*/
