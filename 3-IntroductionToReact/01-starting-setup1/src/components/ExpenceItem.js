import "./ExpenseItem.css";

function Expennseiteam() {
  const ExpenseDate = new Date(2023, 5, 6);
  const expenseTitle = "Car Insurence";
  const expenseAmount = 298.8;
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default Expennseiteam;
// module.exports.Expennseiteam = Expennseiteam;
