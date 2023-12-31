import "./ExpenseItem.css";

function Expennseiteam(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("es-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <div>
        <div>{month}</div>
        <div>{date}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default Expennseiteam;
