import React, { useState, createContext } from 'react';

export const Jobs = createContext(null);
export const Inputs = createContext(null);
export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState({ job: '', location: '' });
  const [jobs, setJobs] = useState([]);
  return (
    <Jobs.Provider value={[jobs, setJobs]}>
      <Inputs.Provider value={[search, setSearch]}>{children}</Inputs.Provider>
    </Jobs.Provider>
  );
};
