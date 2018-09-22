import React, { Component } from "react";

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
      <p>Copyright 2018 by Hasan Oktay ARDA</p>
    </div>
  );
}
export default App;
