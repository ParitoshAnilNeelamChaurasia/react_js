import React, { createContext } from 'react';

// Declare and export DataContext only once
export const DataContext = createContext();

const UserContext = ({ children }) => {
  // Provide some data to be used across the components
  const username = "Paritosh";

  return (
    <DataContext.Provider value={username}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;
