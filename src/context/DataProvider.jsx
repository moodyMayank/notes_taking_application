import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [starredNotes, setStarredNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  return (
    <DataContext.Provider
      value={{
        notes,
        starredNotes,
        archiveNotes,
        deletedNotes,
        setNotes,
        setStarredNotes,
        setArchiveNotes,
        setDeletedNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
