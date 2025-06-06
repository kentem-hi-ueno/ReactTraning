import { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note/Note";
import NoteLists from "./components/NoteLists/NoteLists";
import type { Note as NoteType } from "./types";

function App() {
  const [noteList, setNoteList] = useState<NoteType[]>([
    { id: 1, title: "新しいノート", content: "", uploadDay: Date.now() },
  ]);
  const [currentNote, setCurrentNote] = useState(1);
  useEffect(() => {
    const initialNote = localStorage.getItem("noteList");
    if (initialNote) {
      setNoteList(JSON.parse(initialNote));
    }
  }, []);

  const handleNoteChange = (note: NoteType) => {
    const copyNoteList = noteList.map((val) =>
      val.id === currentNote ? note : val,
    );
    setNoteList(copyNoteList);
    localStorage.setItem("noteList", JSON.stringify(copyNoteList));
  };

  const handleNoteListAdd = () => {
    const lastNote = noteList.at(-1);
    let newIndex: number;
    if (lastNote) {
      newIndex = lastNote.id + 1;
    } else {
      newIndex = 0;
    }
    setNoteList((prev) => [
      ...prev,
      {
        id: newIndex,
        title: "新しいノート",
        content: "",
        uploadDay: Date.now(),
      },
    ]);
    setCurrentNote(newIndex);
    localStorage.setItem(
      "noteList",
      JSON.stringify([
        ...noteList,
        {
          id: newIndex,
          title: "test",
          content: "testtesttest",
          uploadDay: Date.now(),
        },
      ]),
    );
  };
  const handleNoteListDelete = (index: number) => {
    setNoteList((prev) => prev.filter((note) => note.id !== index));
    localStorage.setItem(
      "noteList",
      JSON.stringify(noteList.filter((note) => note.id !== index)),
    );
  };
  const note = noteList.find((note) => note.id === currentNote);
  return (
    <>
      <NoteLists
        currentNote={currentNote}
        noteList={noteList}
        onNoteListAdd={handleNoteListAdd}
        onNoteListDelete={handleNoteListDelete}
        onCurrentNoteChange={setCurrentNote}
      />
      {note ? <Note note={note} onNoteChange={handleNoteChange} /> : null}
    </>
  );
}

export default App;
