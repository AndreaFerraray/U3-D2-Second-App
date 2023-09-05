import React from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNav />
      <div className="container">
        <Welcome />
        <AllTheBooks />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
