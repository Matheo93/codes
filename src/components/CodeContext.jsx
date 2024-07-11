import React, { createContext, useState, useEffect, useContext } from 'react';

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [codes, setCodes] = useState(() => {
    const savedCodes = localStorage.getItem('codes');
    return savedCodes ? JSON.parse(savedCodes) : [];
  });

  useEffect(() => {
    localStorage.setItem('codes', JSON.stringify(codes));
  }, [codes]);

  const addCode = (newCode) => {
    setCodes((prevCodes) => {
      const updatedCodes = [...prevCodes.filter(code => code.id !== newCode.id), newCode];
      localStorage.setItem('codes', JSON.stringify(updatedCodes));
      return updatedCodes;
    });
  };

  const deleteCode = (id) => {
    setCodes((prevCodes) => {
      const updatedCodes = prevCodes.filter(code => code.id !== id);
      localStorage.setItem('codes', JSON.stringify(updatedCodes));
      return updatedCodes;
    });
  };

  return (
    <CodeContext.Provider value={{ codes, addCode, deleteCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => useContext(CodeContext);
