import { createContext, useState, useEffect } from "react";
import { supabase } from "../client";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const fetchNotes = async () => {
    let { data, error } = await supabase.from("notes").select("*");
    setNotes(data);
  };

  const addNote = async (author, content) => {
    let { data, error } = await supabase
      .from("notes")
      .insert([{ author: author, content: content }]);
  };

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes: notes,
        fetchNotes: fetchNotes,
        addNote: addNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
