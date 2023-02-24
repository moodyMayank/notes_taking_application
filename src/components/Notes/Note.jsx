import { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, styled } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 225px;
  margin: 10px;
  padding: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow-wrap: anywhere;
`;

const Note = ({ note }) => {
  const { notes, setNotes, setDeletedNotes, setStarredNotes } =
    useContext(DataContext);

  const deleteNote = () => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  const starNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setStarredNotes((prevArr) => [note, ...prevArr]);
  };

  useEffect(() => {
    console.log("Here");
    // const notesItem = JSON.parse(localStorage.getItem("notesKey"));
    // if (notesItem) setNotes(notesItem);
    localStorage.setItem("notesKey", JSON.stringify(notes));
  }, [notes]);

  const archiveNote = () => {};
  return (
    <StyledCard>
      <CardContent>
        <Typography
          variant="h1"
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}
        >
          {note ? note.heading : ""}
        </Typography>
        <Typography style={{ minHeight: "50px" }}>
          {note ? note.text : ""}
        </Typography>
      </CardContent>
      <CardActions sx={[{ cursor: "pointer" }]}>
        <StarBorderIcon
          color="success"
          fontSize="small"
          onClick={() => starNote(note)}
        />
        <ArchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <DeleteOutlinedIcon
          fontSize="small"
          onClick={() => deleteNote()}
          color="error"
        />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
