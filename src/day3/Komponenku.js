import { useState, useEffect } from "react";

const Komponenku = (props) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = () => {
      return ["nasi padang", "nasi gule", "nasi gudeg"];
    };
    let data = fetchMenu();
    setMenu(data);
  }, []);

  return (
    <div>
      {menu.map((makanan) => (
        <div>{makanan}</div>
      ))}
    </div>
  );
};
export default Komponenku;