const React = require("react");
import axios from "axios";
import App from "../client/components/App";
const ReactDOMServer = require("react-dom/server");

export default () => {
  return axios.get("http://localhost:3000/api/books/")
  .then(resp => {
    return {
      markup: ReactDOMServer.renderToString(
        <App initialData={resp.data} />
      ),
      data: resp.data,
    }
  });
};
