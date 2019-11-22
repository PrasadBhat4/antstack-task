import React from "react";

class ShowItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.itemName}-{this.props.itemValue}
      </div>
    );
  }
}

export default ShowItem;
