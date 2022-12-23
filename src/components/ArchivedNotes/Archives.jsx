import { useContext } from "react";
import { Box, Grid, styled } from "@mui/material";

// Components
import Archive from "./Archive";
import EmptyNotes from "../EmptyNotes";

// Icons
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Using Key here to avoid the Warning in the React Code
const Archives = () => {
  const { archiveNotes } = useContext(DataContext);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {archiveNotes.length > 0 ? (
        <Grid container style={{ marginTop: "16px" }}>
          {archiveNotes.map((note) => {
            return (
              <Grid item key={note.id}>
                <Archive note={note} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <EmptyNotes
          Image={
            <UnarchiveOutlinedIcon
              style={{ fontSize: "120px", color: "#f5f5f5" }}
            />
          }
          displayText={"Arhive Notes are here"}
        />
      )}
    </Box>
  );
};

export default Archives;
