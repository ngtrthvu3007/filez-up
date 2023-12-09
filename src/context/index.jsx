import React, { createContext, useState } from "react";

const defaulContext = {
  path_name: "",
  setPathName: () => null,
  isAuthenticated: false,
  setIsAuthenticated: () => null,
  user: {},
  setUser: () => null,
};

export const AppContext = createContext(defaulContext);
export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(defaulContext.isAuthenticated);
  const [path_name, setPathName] = useState(defaulContext.path_name);
  const [user, setUser] = useState(defaulContext.user);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setPathName,
        setIsAuthenticated,
        path_name,
        user,
        setUser,
      }}>
      {children}
    </AppContext.Provider>
  );
};
