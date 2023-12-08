import React, { createContext, useContext, useState } from 'react';

const StudioContext = createContext();

export const StudioProvider = ({ children }) => {
  const [studioId, setStudioId] = useState(null);

  const setStudioFunk = (id) => {
    setStudioId(id);
  };

  return (
    <StudioContext.Provider value={{ studioId, setStudioFunk }}>
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => {
  return useContext(StudioContext);
};