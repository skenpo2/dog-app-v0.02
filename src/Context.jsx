import { createContext, useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const url = `https://api.thedogapi.com/v1/images/search?limit=1&has_breed=1&api_key=${
  import.meta.env.VITE_API_KEY
}`;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { response } = useQuery({
    queryKey: ['dog'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  return (
    <AppContext.Provider value={{ response }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
