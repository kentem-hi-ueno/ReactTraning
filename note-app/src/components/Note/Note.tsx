import type { Note as NoteType } from "../../types";
import "./Note.css";
import NoteRead from "./NoteRead/NoteRead";
import NoteWrite from "./NoteWrite/NoteWrite";

type NoteProps = {
  note: NoteType;
  onNoteChange: (note: NoteType) => void;
};
const Note: React.FC<NoteProps> = ({ note, onNoteChange }) => {
  return (
    <div className="noteTop">
      {note ? (
        <>
          <NoteWrite note={note} onNoteChange={onNoteChange} />
          <NoteRead note={note} />
        </>
      ) : (
        <p>ノートが選択されていません</p>
      )}
    </div>
  );
};

export default Note;
