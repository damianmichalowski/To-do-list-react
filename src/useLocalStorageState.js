import { useState , useEffect } from "react";

export const useLocalStorageState = (keyName) => {
    const getLocalStorageState = () => {
      const keyStorage = localStorage.getItem(keyName);
      
      return keyStorage ? JSON.parse(keyStorage) : [];
    };
  
    const [state, setState] = useState(getLocalStorageState);
    
    useEffect(() => {
      localStorage.setItem(keyName, JSON.stringify(state));
    }, [state, keyName]);
    
    return [state , setState];
  };