import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import Form from "./Form";
import Note from "./Note";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Form />
      <Grid container>
        {notes.map(function (note) {
          return (
            <Grid item>
              <Note note={note} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Notes;
