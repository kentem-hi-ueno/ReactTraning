import React from "react";
import type { Note } from "../../../types";
import "./NoteWrite.css";

type NoteWriteProps = {
  note: Note;
  onNoteChange: (note: Note) => void;
};

const NoteWrite: React.FC<NoteWriteProps> = ({ note, onNoteChange }) => {
  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const copynotes = { ...note };
    copynotes.title = e.target.value;
    copynotes.uploadDay = Date.now();
    onNoteChange(copynotes);
  };

  const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    const copynotes = { ...note };
    copynotes.content = e.target.value;
    onNoteChange(copynotes);
  };
  return (
    <div className="noteWrite">
      <input
        type="text"
        className="inputTitle"
        value={note.title}
        onChange={handleTitleChange}
      />
      <br />
      <textarea
        className="inputContent"
        value={note.content}
        onChange={handleContentChange}
      ></textarea>
    </div>
  );
};

export default NoteWrite;
