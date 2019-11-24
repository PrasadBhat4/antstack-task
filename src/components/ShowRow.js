import React, { Component } from "react";
import ShowItem from "./ShowItem";

class ShowRow extends Component {
  renderItem(items) {
    return Object.keys(items).map(key => {
      //console.log(items);
      return <ShowItem itemName={key} itemValue={items[key]} />;
    });
  }
  render() {
    return (
      <tr style={{ textAlign: "center" }}>
        <td>{this.props.row.orderId}</td>
        <td>{this.props.row.customerId}</td>
        <td>{this.props.row.deliveryPincode}</td>
        <td>{this.props.row.orderDate}</td>
        <td>{this.renderItem(this.props.row.items)}</td>
      </tr>
    );
  }
}

export default ShowRow;
