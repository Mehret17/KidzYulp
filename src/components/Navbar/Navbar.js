import React from "react";
import { Link } from "react-router-dom";

import newActivityRequests from '../../firebaseRequests/addnewactivity';
import authRequests from "../../firebaseRequests/auth";

import "./NavBar.css";

class NavBar extends React.Component {

  formSubmitEvent = (newActivity) => {
    newActivityRequests.postNewActivity(newActivity)
      .then(() => {
      })
      .catch((err) => {
        console.error('error with activity post', err);
      })
  };

  render() {
    const { authed, signOut } = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      signOut();
    };

    return (

      <div>
        <nav className="navbar navbar-fixed-top">
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
                  <li>
                      <Link to="/activity"> Activity </Link>
                    </li>
                  <li>
                    <Link to="/mycollection">My Collection</Link>
                  </li>
                  <li>
                    <Link to="/recommendation">Recommendation</Link>
                  </li>
                  <li>
                  <Link to={{ pathname: "/addnewactivity", onSubmit: this.formSubmitEvent }}>Create Event</Link>
                  </li>

                  <li className="navbar-form">
                    <button
                      onClick={logoutClickEvent}
                      className="btn btn-default logout"
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

export default NavBar;
