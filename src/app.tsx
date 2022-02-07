import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";

function render() {
  ReactDOM.render(<App />, document.querySelector("#root"));
}

render();
