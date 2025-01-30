/* eslint-disable react/prop-types */
 
import Button from "../FormElements/Button";
import classes from "./Table.module.css";
export default function Table({ salesData }) {
  return (
    <div >
        <table className={classes["rwd-table"]}>
    <tbody>
    <tr>
            <th>Date</th>
            <th>Total Liters Sold</th>
            <th>Price</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
          {salesData.map((data, index) => (
            <tr key={index}>
              <td data-th="Date">{new Date().toLocaleDateString()}</td>
              <td>{data.total_sold}</td> 
              <td>{data.price}</td>
              <td>{data.total_price}</td> 
              <td>
                <Button to={'/collect-cash'} exact={true}>Collect Cash</Button>
              </td>
            </tr>
          ))}
    </tbody>
  </table>
      
    </div>
  );
}
