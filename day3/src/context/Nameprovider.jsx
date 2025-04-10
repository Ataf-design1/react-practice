import React, { createContext,  useState } from "react";

export const NameContext = createContext();
const Nameprovider = ({ children }) => {
  const [name, setname] = useState("coding-ninjas");
  const handleChange = () => {
    const n = name === "coding-ninjas" ? "masai-school" : "coding-ninjas"
    setname(n)
   }



  return (
    <NameContext.Provider value={{ name, handleChange }}>
      {children}
    </NameContext.Provider>
  );
};

export default Nameprovider;
