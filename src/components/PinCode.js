import React from "react";

class PinCode extends React.Component {
  state = { pincode: "" };

  renderPinCode = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.pincode);
  };

  render() {
    console.log(this.state.pincode);
    return (
      <div className="ui container">
        <form
          style={{ width: "200px" }}
          onSubmit={this.renderPinCode}
          className="ui form"
        >
          <div className="field">
            <label>PinCode :</label>
            <input
              type="text"
              value={this.state.pincode}
              onChange={e => this.setState({ pincode: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PinCode;
