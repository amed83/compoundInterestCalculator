import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

export const StyledInput = styled(TextField)`
  width: 10rem;
  & input {
    padding-left: 5px;
    font-size: 20px;
  }
  & label {
    font-size: 20px;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8rem;
  width: 60%;
  background-color: #e2e1e1;
  margin-top: 3rem;
  border-radius: 5px;
`;

export const StyledSlider = styled(Slider)`
  width: 20%;
  &&.root-class {
    color: green;
    > span:first-child {
      color: black;
    }
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

export const StyledTotal = styled.h2`
  font-weight: bold;
`;

export const StyledMonthlyRepay = styled.h3`
  font-weight: bold;
`;

export const StyledSliderTitle = styled.h3`
  margin-bottom: 3rem;
  text-align: left;
`;
