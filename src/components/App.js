import React from "react";
import JsonAxios from "../apis/JsonAxios";
import DashBoard from "./DashBoard";
import PinCode from "./PinCode";

class App extends React.Component {
  state = { response: "" };
  onLoad = async () => {
    const response = await JsonAxios.get("/dashboard");
    this.setState({ response: response });
  };
  onSearch = async pincode => {
    const response = await JsonAxios.get(`/pincode/${pincode}`);
    this.setState({ response: response });
  };
  componentDidMount() {
    this.onLoad();
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Order Management System</h2>
        <PinCode onSubmit={this.onSearch} />
        <DashBoard order={this.state.response} />
      </div>
    );
  }
}

export default App;
