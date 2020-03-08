import { INTEREST_RATE } from "../../constants/constants";

export const calculateWithCompoundInterest = (amount, months) => {
  const totalWithCompoundInterest = (
    amount,
    months,
    monthlyRate = INTEREST_RATE
  ) => {
    return amount * Math.pow(1 + monthlyRate / 100, months);
  };
  return totalWithCompoundInterest(amount, months).toFixed(1);
};
