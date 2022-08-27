import React from "react";
import NotesContext from "../context/NotesContext";
import { useContext, useState } from "react";

function Modal() {
  const { addNote, fetchNotes } = useContext(NotesContext);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <label htmlFor="my-modal" className="btn modal-button rounded">
        Add Note
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl">Add note</h3>
          <input
            required
            type="text"
            className="mt-4 input input-bordered w-full"
            placeholder="Author..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            required
            type="text"
            className="mt-4 input input-bordered w-full "
            placeholder="Content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="modal-action">
            <label
              className="mt-4 modal-action block btn pt-4 rounded-md"
              htmlFor="my-modal"
              onClick={() => {
                addNote(author, content);
                fetchNotes();
              }}
            >
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
