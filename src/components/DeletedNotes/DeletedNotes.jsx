import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

// Components
import DeletedNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Using Key here to avoid the Warning in the React Code
const DeletedNotes = () => {
  const { deletedNotes } = useContext(DataContext);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {deletedNotes.length > 0 ? (
        <>
          <Button>Delete Permanent </Button>
          <Grid container style={{ marginTop: "16px" }}>
            {deletedNotes.map((note) => {
              return (
                <Grid item key={note.id}>
                  <DeletedNote note={note} />
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <div>Empty</div>
      )}
    </Box>
  );
};

export default DeletedNotes;
