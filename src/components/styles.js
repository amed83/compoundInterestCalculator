import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

export const StyledInput = styled(TextField)`
  width: 10rem;
  & input {
    padding-left: 5px;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8rem;
`;

export const StyledSlider = styled(Slider)`
  width: 20%;
  &&.root-class {
    color: green;
  }
`;

export const StyledSliderContainer = styled(Container)`
  padding-top: 5rem;
  &&.root-class {
    width: 50%;
  }
`;

export const StyledErrorText = styled.p`
  color: red;
  font-weight: bold;
`;
