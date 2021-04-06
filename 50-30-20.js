const budget = (income) => {
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;
  return { Needs: needs, Wants: wants, Savings: savings };
};

console.log(budget(1000));
