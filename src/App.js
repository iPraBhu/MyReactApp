import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        {
          /* <Contact
          name="Pratik Bhuite"
          email="pratik.bhuite@gmail.com"
          phone="111 111 111"
        />

        <Contact name="Pra Bhu" email="pra.bhu@gmail.com" phone="111 111 111" />
       */

          <Contacts />
        }
      </div>
    </div>
  );
}

export default App;
