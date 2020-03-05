import { AmountConstraints } from "../constants/constants";

export const errorMessages = {
  emptyInput: `This field can't be empty`,
  wrongAmount: `The amount must be between ${AmountConstraints.lowLimit}£ and ${AmountConstraints.upLimit}£`
};
