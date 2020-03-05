import { calculateWithCompoundInterest } from "./compoundFormula";

test(" calculateWithCompoundInterest with amount of 600 and one year should return  671.1", () => {
  expect(calculateWithCompoundInterest(600, 12)).toBe("676.1");
});
