import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  // sync our firestore with the store state
  firestore: firestoreReducer,
  // sync auth status on firebase with Redux state
  firebase: firebaseReducer,
});

export default rootReducer;
