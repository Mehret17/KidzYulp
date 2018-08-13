import React from "react";
import { Link } from "react-router-dom";

import authRequests from "../../firebaseRequests/auth";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    const { authed, signOut } = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      signOut();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                KidzYulp
              </Link>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              {authed ? (
                <ul className="nav navbar-nav navbar-right">
                  {/* <li>
                      <Link to="/activity">Activity</Link>
                    </li> */}
                  <li>
                    <Link to="/mycollection">My Collection</Link>
                  </li>
                  <li>
                    <Link to="/recommendation">Recommendation</Link>
                  </li>
                  <li>
                    <Link to="/addnewactivity">Create Activity</Link>
                  </li>

                  <li className="navbar-form">
                    <button
                      onClick={logoutClickEvent}
                      className="btn btn-danger"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  {/* <li>
                        <Link to="/activity">Activity</Link>
                      </li> */}
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
