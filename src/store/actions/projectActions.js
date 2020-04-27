// returns a function instead of an action
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    // getState()
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        // same as project.title, project.content
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        // Dispatch
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        // Dispatch err object
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
