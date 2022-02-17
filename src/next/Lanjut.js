import { useMemo } from "react";

const fetchMenu = () => {
  return ["nasi padang", "nasi uduk", "nasi gudeg"];
};

let menu = useMemo(() => {
  if ((props.wilayah = "bali")) return ["ayam betutu"];
  return fetchMenu();
}, [props.wilayah]);
