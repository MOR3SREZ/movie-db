import { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [selectPage, setSelectPage] = useState(1);

  const filterCleaner = () => {
    setStatus('');
    setSpecies('');
    setGender('');
    setSelectPage('');
  };

  return (
    <FilterContext.Provider
      value={{
        setGender,
        setSpecies,
        setStatus,
        setSelectPage,
        filterCleaner,

        status,
        species,
        gender,
        selectPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
