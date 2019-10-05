import React, { Component } from "react";
import uuid from "uuid";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
        name: "Pratik Bhuite",
        email: "pratik.bhuite@gmail.com",
        phone: "111 111 111"
      },
      {
        id: uuid(),
        name: "Pra Bhu",
        email: "pra.bhu@ gmail.com",
        phone: "222 222 222"
      },
      {
        id: uuid(),
        name: "Ram Sharma",
        email: "ram.sharma@gmail.com",
        phone: "333 333 333"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
