import { createContext, useContext, useState } from "react";
import { numbersData } from "../../data";

const NumberContext = createContext();

export const NumberContextProvider = ({ children }) => {
  const [numberGridData, setNumberGridData] = useState(numbersData);
  const data = { numberGridData };
  return (
    <NumberContext.Provider value={data}>{children}</NumberContext.Provider>
  );
};
export const useNumberContext = () => useContext(NumberContext);
