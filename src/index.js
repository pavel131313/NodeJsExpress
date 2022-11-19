// import Person from "./scripts/Person"
import CandidatesList from "./scripts/components/CandidatesLists"
import React from "react"
import ReactDOM from "react-dom"

// const person1 = new Person("Brad")
if (document.querySelector("#render-react-example-here")) {
  ReactDOM.render(<CandidatesList />, document.querySelector("#render-react-example-here"))
}
