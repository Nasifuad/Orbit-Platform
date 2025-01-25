import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const myContext = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [UserInfo, setUserInfo] = useState("gUEST");
  const setToLocal = (key, value) => {
    localStorage.setItem(key, value);
  };

  setToLocal("isLogged", isLogged);
  return (
    <myContext.Provider
      value={{ isLogged, setIsLogged, UserInfo, setUserInfo }}
    >
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;
