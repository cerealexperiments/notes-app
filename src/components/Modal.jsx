import React from "react";
import NotesContext from "../context/NotesContext";
import { useContext, useState } from "react";

function Modal() {
  const { addNote, fetchNotes } = useContext(NotesContext);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleClick = async () => {
    if (author.length >= 3 && content.length >= 6) {
      await addNote(author, content);
      setAuthor("");
      setContent("");
      fetchNotes();
    }
  };

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
          {author.length < 3 && (
            <p className="ml-0.5 mt-1 text-sm text-gray-600">
              Author name should at least be 3 characters long
            </p>
          )}
          <input
            required
            type="text"
            className="mt-4 input input-bordered w-full "
            placeholder="Content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {content.length < 6 && (
            <p className="ml-0.5 mt-1 text-sm text-gray-600">
              Content field should at least be 6 characters long
            </p>
          )}
          <div className="modal-action">
            <label
              className={`mt-4 modal-action block btn pt-4 rounded-md ${
                author.length < 3 || content.length < 6 ? "btn-disabled" : ""
              }`}
              htmlFor="my-modal"
              onClick={handleClick}
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
