import React from "react";
import JsonAxios from "../apis/JsonAxios";
import DashBoard from "../DashBoard";

class App extends React.Component {
  state = { response: "" };
  onLoad = async () => {
    const response = await JsonAxios.get("/dashboard");
    this.setState({ response: response });
  };
  componentDidMount() {
    this.onLoad();
  }

  render() {
    return (
      <div>
        <DashBoard order={this.state.response} />
      </div>
    );
  }
}

export default App;
