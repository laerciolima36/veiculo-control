import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateData = (newData) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <DataContext.Provider value={{ formData, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);