import React, { Component } from "react";

function Hello(props) {
  return <li>Hello {props.name} </li>;
}
function Copyright(props) {
  return (
    <li>
      Copyright {props.year} by {props.name}
    </li>
  );
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
      <Copyright name=" Ugur ARDA" year="2019" />
    </div>
  );
}
export default App;
