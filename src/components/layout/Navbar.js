import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SingedInLinks";
import SignedOutLinks from "./SingedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth } = props;

  // output depending on auth status
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // return the things we want to attach to the props
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
