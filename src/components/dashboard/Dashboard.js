import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

// state is the state of the Redux store
const mapStateToProps = (state) => {
  // state returns all the reducers binded in rootReducer
  // console.log(state);
  return {
    // sync from firestore to component
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  // mapStateToProps: connect react component with redux store
  connect(mapStateToProps),

  // when this component is active, the collection I want to listen to is called 'projects'
  // when data in the collection is changed, the firestore reducer is induced to sync the store state with firestore
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
