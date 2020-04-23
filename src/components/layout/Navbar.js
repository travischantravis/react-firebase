import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SingedInLinks";
import SignedOutLinks from "./SingedOutLinks";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // return the things we want to attach to the props
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
