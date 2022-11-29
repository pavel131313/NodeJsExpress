import App from "./App";
import React from "react"
import ReactDOM from "react-dom"

if (document.querySelector("#render-react-example-here")) {
  ReactDOM.render(<App />, document.querySelector("#render-react-example-here"))
}
