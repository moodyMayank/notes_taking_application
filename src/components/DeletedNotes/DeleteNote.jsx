import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, styled } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 200px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Note = ({ note }) => {
  const {
    notes,
    starredNotes,
    archiveNotes,
    deletedNotes,
    setNotes,
    setStarredNotes,
    setArchiveNotes,
    setDeletedNotes,
  } = useContext(DataContext);

  const deleteNote = () => {
    console.log("deleted");
  };

  const starNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setStarredNotes((prevArr) => [note, ...prevArr]);
  };

  const archiveNote = () => {};
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note ? note.heading : ""}</Typography>
        <Typography>{note ? note.text : ""}</Typography>
      </CardContent>
      <CardActions style={{ cursor: "pointer" }}>
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
