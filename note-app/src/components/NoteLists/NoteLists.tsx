import uuid from "react-uuid";
import "../../types";
import type { Note } from "../../types";
import "./NoteLists.css";
export type NoteListsProps = {
  currentNote: number;
  noteList: Note[];
  onNoteListAdd: () => void;
  onNoteListDelete: (index: number) => void;
  onCurrentNoteChange: (index: number) => void;
};

const NoteLists: React.FC<NoteListsProps> = ({
  currentNote,
  noteList,
  onNoteListAdd,
  onNoteListDelete,
  onCurrentNoteChange,
}) => {
  const handleNoteClick = (index: number) => {
    onCurrentNoteChange(index);
  };
  const handleDeleteClick = (index: number) => {
    onNoteListDelete(index);
  };
  const handleAddClick = () => {
    onNoteListAdd();
  };
  const sortNoteList = [...noteList].sort((a, b) => b.uploadDay - a.uploadDay);
  const NoteList = sortNoteList.map((note) => {
    return (
      <div
        key={uuid()}
        className={`note ${currentNote === note.id && "current"}`}
        onClick={() => handleNoteClick(note.id)}
      >
        <div className="noteHead">
          <h2 className="noteTitle">{note.title.slice(0, 20)}</h2>
          <button className="delete" onClick={() => handleDeleteClick(note.id)}>
            削除
          </button>
        </div>
        <p className="noteContent">{note.content.slice(0, 20)}</p>
        <small>
          {new Date(note.uploadDay).toLocaleDateString("ja-JP", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
    );
  });

  return (
    <div className="noteLists">
      <div className="listHead">
        <h2>ノート</h2>
        <button className="delete" onClick={handleAddClick}>
          追加
        </button>
      </div>
      <div className="noteList">{NoteList}</div>
    </div>
  );
};

export default NoteLists;
