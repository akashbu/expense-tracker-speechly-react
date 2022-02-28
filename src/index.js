import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="dc6db5b7-e952-48e0-abf9-f0c476a07966" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
