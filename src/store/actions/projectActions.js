// returns a function instead of an action
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        // same as project.title, project.content
        ...project,
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 12345,
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
