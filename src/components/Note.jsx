import { MdDeleteForever } from "react-icons/md";
import "../styles/note.css";

function Note() {
  return (
    <div class="note">
      <span>Title</span>
      <span>This is our text area </span>
      <div className="note-footer">
        <span>23/11/1997</span>
        <MdDeleteForever />
      </div>
    </div>
  );
}

export default Note;
