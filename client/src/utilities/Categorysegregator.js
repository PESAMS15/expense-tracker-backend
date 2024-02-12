module.exports.Segregator = (data) => {
  const segregated = {
    Housing: 0,
    Transportation: 0,
    Food: 0,
    Utilites: 0,
    Saving: 0,
    Debt_Payments: 0,
    Others: 0,
  };
  let total = 0;

  data.forEach((item) => {
    segregated[item.category] += parseInt(item.amount.$numberDecimal);
    total += parseInt(item.amount.$numberDecimal);
  });
  return [segregated, total];
};
