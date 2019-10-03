import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Pratik Bhuite",
        email: "pratik.bhuite@gmail.com",
        phone: "111 111 111"
      },
      {
        id: 2,
        name: "Pra Bhu",
        email: "pra.bhu@gmail.com",
        phone: "222 222 222"
      },
      {
        id: 3,
        name: "Ram Sharma",
        email: "ram.sharma@gmail.com",
        phone: "333 333 333"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
