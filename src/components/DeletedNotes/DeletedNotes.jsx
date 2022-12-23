import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import DeletedNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Using Key here to avoid the Warning in the React Code
const DeletedNotes = () => {
  const { notes } = useContext(DataContext);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {notes.length > 0 ? (
        <Grid container style={{ marginTop: "16px" }}>
          {notes.map((note) => {
            return (
              <Grid item key={note.id}>
                <DeletedNote note={note} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>Empty</div>
      )}
    </Box>
  );
};

export default DeletedNotes;
