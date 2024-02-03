import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../firebaseConfig.js";
import { getDatabase, ref, onValue, remove } from "firebase/database";

function App() {
  // State to hold the notes retrieved from Firebase
  const [notes, setNotes] = useState([]);

  // useEffect to fetch notes from Firebase when the component mounts
  useEffect(() => {
    // Get a reference to the Firebase database
    const db = getDatabase();
    // Reference to the "ToDo" node in the database
    const todoRef = ref(db, "ToDo");

    // Set up a listener for changes in the "ToDo" node
    onValue(todoRef, (snapshot) => {
      // Extract the data from the snapshot
      const data = snapshot.val();

      // If there is data, convert it to an array of notes
      if (data) {
        const todoArray = Object.keys(data).map((key) => ({
          id: key,
          title: data[key].title,
          content: data[key].content,
        }));

        // Update the local state with the array of notes
        setNotes(todoArray);
      }
    });
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  // Function to delete a note from Firebase and update the local state
  async function deleteNote(id) {
    const db = getDatabase();
    const noteRef = ref(db, "ToDo/" + id);

    try {
      // Remove the corresponding data from Firebase
      await remove(noteRef);
      console.log("Note removed from Firebase successfully");
    } catch (error) {
      console.error("Error removing note from Firebase: ", error);
    }

    // Update local state by filtering out the deleted note
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
