import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    // <div>
    //   <h1 style={{ color: "red", fontSize: "50px" }}>{props.branding}</h1>
    //   <p style={paraStyle}>This is a contact manager</p>
    // </div>

    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const paraStyle = {
//   color: "green",
//   textDecoration: "underline"
// };

export default Header;
