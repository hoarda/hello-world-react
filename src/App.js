import React, { Component } from "react";

function HelloEsma() {
  return <li>Hello Esma</li>;
}

function HelloHussein() {
  return <li>Hello Hussein</li>;
}

function HelloOktay() {
  return <li>Hello Oktay</li>;
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <HelloEsma />
        <HelloHussein />
        <HelloOktay />
      </ul>
    </div>
  );
}
export default App;
