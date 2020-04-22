import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  // sync our firestore with the store state
  firestore: firestoreReducer,
});

export default rootReducer;
