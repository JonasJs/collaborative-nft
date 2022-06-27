import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useMoralis } from "react-moralis";


export const AppContext = createContext({})

function AppProvider({children}: any) {
  // Moralis
  const { authenticate, isAuthenticated, user, Moralis } = useMoralis();

  // UseState
  const [selectedColor, setSelectedColor] = useState({
    hex: "red"
  });

  async function handleLoginMetamask() {
    try {
      if (!isAuthenticated) {
        const user  = await authenticate({ signingMessage: "Log in using Moralis" });
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLoginWalletConnect() {
    try {
      if (!isAuthenticated) {
        const user  = await authenticate({
          signingMessage: "Log in using Moralis",
          provider: "walletconnect", 
          // mobileLinks: [
          //   "rainbow",
          //   "metamask",
          //   "argent",
          //   "trust",
          //   "imtoken",
          //   "pillar",
          // ] 
        });
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(isAuthenticated) {
      console.log(user.attributes.accounts)
    }
   
  }, [isAuthenticated])
  return (
    <AppContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        authenticate,
        isAuthenticated,
        user,
        handleLoginWalletConnect,
        handleLoginMetamask
      }}>
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  return context;
}

export {useApp, AppProvider};