import React from "react";
import Playercard from "./playercard";
import Playerform from "./playerform";
import Teamcard from "./Teamcard";

function App() {
  return (
    <div className="app">
      <Playercard />
      <Playerform />
      <Teamcard flightNumber="1" />
      <Teamcard flightNumber="2" />
      <Teamcard flightNumber="3" />
      <Teamcard flightNumber="4" />
      <Teamcard flightNumber="5" />
    </div>
  );
}

export default App;
