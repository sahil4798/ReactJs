import classes from "./Table.module.css";
const formatter = new Intl.NumberFormat("es-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <th>{formatter.format(yearData.year)}</th>
            <th>{formatter.format(yearData.savingsEndOfYear)}</th>
            <th>{formatter.format(yearData.yearlyInterest)}</th>
            <th>
              {formatter.format(
                yearData.savingsEndOfYear -
                  props.intialInvestment -
                  yearData.yearlyContribution * yearData.year
              )}
            </th>
            <th>
              {formatter.format(
                props.intialInvestment +
                  yearData.yearlyContribution * yearData.year
              )}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
