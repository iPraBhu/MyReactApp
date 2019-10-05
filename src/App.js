import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { Provider } from "./context";
function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <AddContact />
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
    </Provider>
  );
}

export default App;
