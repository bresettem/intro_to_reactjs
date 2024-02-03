import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { getDatabase, ref, push, set } from "firebase/database";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function submitNote(event) {
    const db = getDatabase();
    const todoRef = ref(db, "ToDo");

    // Add the new note to both local state and Firebase
    const newNoteRef = push(todoRef);
    set(newNoteRef, note);

    setNote({
      title: "",
      content: "",
    });
    setExpanded(false);

    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" method="POST">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            autoFocus
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded && true}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
