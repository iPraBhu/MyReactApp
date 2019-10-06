import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
