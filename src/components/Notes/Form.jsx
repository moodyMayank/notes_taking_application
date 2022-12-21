import React from "react";
import { useState } from "react";
import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
`;

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);

  const onTextAreaClick = () => {
    setShowTextField(true);
  };

  const handleClickAway = () => {
    setShowTextField(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container>
        {showTextField && (
          <TextField
            label="Title"
            color="primary"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
