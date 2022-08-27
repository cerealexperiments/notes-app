import React from "react";

function Note({ note }) {
  return (
    <div className="border-2 rounded-lg border-primary flex-shrink-0 p-4 basis-[150px] sm:basis-[250px] sm:min-h-[200px]">
      <p className="font-medium text-lg font-gray-400">{note.author}</p>
      <p className="font-medium text-gray-400 mb-1">
        {`${note.created_at.substring(0, 10)}, ${note.created_at.substring(
          11,
          19
        )}`}
      </p>
      <p className="text-md">{note.content}</p>
    </div>
  );
}

export default Note;
