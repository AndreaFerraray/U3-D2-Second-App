import React from "react";
import "./App.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import AllTheBooks from "./component/AllTheBooks";

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
