import React, { useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import { errorMessages } from "../utils/errorMessages";
import {
  StyledInput,
  StyledContainer,
  StyledSliderContainer,
  StyledSlider,
  StyledErrorText
} from "./styles";

import { calculateWithCompoundInterest } from "../utils/compoundFormula/compoundFormula";

const Dashboard = () => {
  const [months, setMonths] = React.useState(1);
  const [monthlyPayment, setMonthlyPayment] = React.useState(500);
  const [amount, setAmount] = React.useState(500);
  const [total, setTotal] = React.useState(monthlyPayment);
  const [error, setError] = React.useState(null);

  const errorMessage = message => {
    setTotal(0);
    setMonthlyPayment(0);
    return setError(`${message}`);
  };

  const validation = input => {
    setError(null);
    if (!input) {
      return errorMessage(errorMessages.emptyInput);
    }

    if (input < 500 || input > 10000) {
      return errorMessage(errorMessages.wrongAmount);
    }
    setAmount(input);
  };

  const changeLoanAmount = e => {
    const { value } = e.target;
    validation(parseInt(value));
  };

  const changeMonths = (e, val) => {
    setMonths(val);
  };

  React.useEffect(() => {
    if (!amount || !months || error) {
      return;
    }
    const total = calculateWithCompoundInterest(amount, months);
    setTotal(total);
    setMonthlyPayment(total / months);
  }, [amount, months]);

  function valuetext(monthsInput) {
    return `${monthsInput} Months`;
  }

  return (
    <StyledContainer>
      <StyledInput
        data-test="input"
        defaultValue={amount}
        id="standard-basic"
        label="Amount"
        onChange={e => changeLoanAmount(e)}
      />
      <StyledErrorText data-test={"error"}>{error}</StyledErrorText>

      <StyledSliderContainer classes={{ root: "root-class" }}>
        <Typography id="discrete-slider-always" gutterBottom>
          Months
        </Typography>

        <StyledSlider
          classes={{ root: "root-class" }}
          data-test="slider"
          aria-labelledby="discrete-slider-always"
          getAriaValueText={valuetext}
          defaultValue={1}
          onChange={(e, val) => changeMonths(e, val)}
          step={1}
          min={1}
          max={48}
          valueLabelDisplay="on"
        />
      </StyledSliderContainer>
      <Typography variant="h5">
        Total:
        <span style={{ fontWeight: "bold" }} data-test="total">
          £{total}
        </span>
      </Typography>
      <Typography variant="h6">
        Monthly Payment:
        <span style={{ fontWeight: "bold" }}>
          £{monthlyPayment ? monthlyPayment.toFixed(1) : 0}
        </span>{" "}
      </Typography>
    </StyledContainer>
  );
};

export default Dashboard;
