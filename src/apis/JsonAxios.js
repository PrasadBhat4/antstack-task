import axios from "axios";

export default axios.create({
  baseURL: "https://node-server-app.netlify.com/"
});
