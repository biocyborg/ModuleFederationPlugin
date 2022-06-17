import React from "react";
import logo from "./logo.svg";
import "./App.css";

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const RemoteApp = React.lazy(() => import("app2/App"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RemoteApp />
    </div>
  );
}

export default App;
