import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, styled } from "@mui/material";

const StyledCard = styled(Card)`
  width: 200px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Note = ({ note }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note ? note.heading : ""}</Typography>
        <Typography>{note ? note.text : ""}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </StyledCard>
  );
};

export default Note;
