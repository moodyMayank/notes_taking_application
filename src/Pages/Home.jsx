import SwipeDrawer from "../components/SwipeDrawer";
import Notes from "../components/Notes/Notes";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer />
      <Notes />
    </Box>
  );
};

export default Home;
