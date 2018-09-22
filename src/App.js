import React, { Component } from "react";
import Copyright from "./Copyright";
function Hello(props) {
  return <li>Hello {props.name} </li>;
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <Hello name="Esma" />
        <Hello name="Hussein" />
        <Hello name="Oktay" />
      </ul>
      <Copyright name="oktay ARDA" year="2019" />
    </div>
  );
}
export default App;
