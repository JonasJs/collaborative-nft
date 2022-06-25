import React, {
  createContext,
  useContext,
  useState,
} from 'react';


export const AppContext = createContext({})

function AppProvider({children}: any) {
  // UseState
  const [selectedColor, setSelectedColor] = useState({
    hex: "red"
  });

  return (
    <AppContext.Provider
      value={{selectedColor, setSelectedColor}}>
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  return context;
}

export {useApp, AppProvider};