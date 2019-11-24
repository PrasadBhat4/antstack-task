import React from "react";
import ShowRow from "./ShowRow";

class DashBoard extends React.Component {

  renderRow() {
    var allrows = this.props.order.data;
    if (allrows !== undefined) {
      return Object.keys(allrows).map(key => {
        return <ShowRow key={allrows[key].orderId} row={allrows[key]} />;
      });
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui container"></div>
        <div>
          <table className="ui celled table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>Order Id</th>
                <th>Customer Id</th>
                <th>Pincode</th>
                <th>Order Date</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRow()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DashBoard;
