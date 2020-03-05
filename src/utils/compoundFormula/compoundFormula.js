export const calculateWithCompoundInterest = (amount, months) => {
  const totalWithCompoundInterest = (amount, months, monthlyRate = 1) => {
    return amount * Math.pow(1 + monthlyRate / 100, months);
  };
  return totalWithCompoundInterest(amount, months).toFixed(1);
};
