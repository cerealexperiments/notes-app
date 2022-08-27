import React from "react";
import { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Note from "./Note";

function NotesList() {
  const { notes } = useContext(NotesContext);
  return (
    <div className="flex flex-col flex-wrap sm:flex-row justify-center gap-4 align-center">
      {notes.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
}

export default NotesList;
