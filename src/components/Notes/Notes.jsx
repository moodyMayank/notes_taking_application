import { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

// Components
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "../EmptyNotes";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Using Key here to avoid the Warning in the React Code
const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("noteskey"));
    if (items) setNotes(items);
  }, [setNotes]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Form />
      {notes.length > 0 ? (
        <Grid container style={{ marginTop: "16px" }}>
          {notes.map((note) => {
            return (
              <Grid item key={note.id}>
                <Note note={note} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <EmptyNotes
          Image={
            <LightbulbOutlinedIcon
              style={{ fontSize: "120px", color: "#f5f5f5" }}
            />
          }
          displayText={"Notes are Displayed here"}
        />
      )}
    </Box>
  );
};

export default Notes;
