const Content = (prop) => {
  return (
    <tbody>
      <tr>
        <td>{prop.data.year}</td>
        <td>{prop.data.totalSaving}</td>
        <td>{prop.data.interest}</td>
        <td>{prop.data.totalInterest}</td>
        <td>{prop.data.investedCapital}</td>
      </tr>
    </tbody>
  );
};

export default Content;
