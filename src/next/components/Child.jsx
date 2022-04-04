import { useContext } from "react";

const Child = props => {
  let tema = useContext(TemaSitus); // access the context value
  return (
    <div>
      Tema situs sekarang adalah {tema}
    </div>
  );
}
export default Child;