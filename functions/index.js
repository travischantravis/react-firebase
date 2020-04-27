const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Example cloud function
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// a function
const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log("notification added", doc);
    });
};

// attach it to exports object
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();

    // a javascript object: a notification object
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Has to return something or a response
    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate((user) => {
  // Return a chain of stuff lol
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotification(notification);
    });
});
