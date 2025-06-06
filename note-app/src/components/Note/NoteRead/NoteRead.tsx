import React from "react";
import ReactMarkDown from "react-markdown";
import type { Note } from "../../../types";
import "./NoteRead.css";
type NoteReadProps = {
  note: Note;
};

const NoteRead: React.FC<NoteReadProps> = ({ note }) => {
  return (
    <div className="noteRead">
      <h2>{note.title}</h2>
      <ReactMarkDown>{note.content}</ReactMarkDown>
    </div>
  );
};

export default NoteRead;
