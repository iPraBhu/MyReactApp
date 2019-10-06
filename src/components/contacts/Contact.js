import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  className="fas fa-sort-down ml-2"
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  style={{ cursor: "pointer" }}
                />

                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">
                    Phone: {this.props.contact.phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
