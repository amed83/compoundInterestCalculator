import { AMOUNT_CONSTRAINTS } from "../constants/constants";

export const errorMessages = {
  emptyInput: `This field can't be empty`,
  wrongAmount: `The amount must be between ${AMOUNT_CONSTRAINTS.lowLimit}£ and ${AMOUNT_CONSTRAINTS.upLimit}£`
};
