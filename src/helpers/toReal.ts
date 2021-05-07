const toReal = (amount: number) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const formattedNumber = numberFormat.format(amount);
  return formattedNumber;
};

export default toReal;