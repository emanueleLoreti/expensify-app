import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database
//     .ref("expenses")
//     .on("child_removed", (snapshot) => console.log(snapshot.key, snapshot.val()));

// database
//   .ref("expenses")
//   .on("child_changed", (snapshot) => console.log(snapshot.key, snapshot.val()));

// database
//   .ref("expenses")
//   .on("child_added", (snapshot) => console.log(snapshot.key, snapshot.val()));


// database.ref('expenses')
//     .on("value", (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref("expenses").push({
//   description: "Telephone",
//   note: "Vodafone bill",
//   amount: 2730,
//   createdAt: 0,
// });

// database.ref("notes/-M8BekmxVdKqre7F5A0B").remove();

// database
//     .ref("notes")
//     .push({
//         title: "Course Topics",
//         body: "React Native, Python"
//     });

// const firebaseNotes = {
//   notes: {
//     aaefafaer: {
//       title: "First note",
//       body: "This is my note",
//     },
//     ioif88: {
//       title: "Other note",
//       body: "This is my note",
//     },
//   },
// };


// database
//     .ref('notes')
//     .set(notes);

// database
//     .ref()
//     .on("value", 
//         (snapshot) => console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`),
//         (e) => console.log("Error with data fetching", e)
// );

// setTimeout(() => {
//     database
//         .ref()
//         .update({
//             name: "Andrea"
//         })
// }, 3500);

// const onValueChange = database
//     .ref()
//     .on("value", 
//         (snapshot) => console.log(snapshot.val()), 
//         (e) => console.log("Error with data fetching", e));

// setTimeout(() => {
//     database.ref("age").set(29)
// }, 3500);

// setTimeout(() => {
//   database.ref("age").off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//     .ref("location/city")
//     .once("value")
//     .then((snapshot) => {
//         const val =snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => console.log("Error fetching data", e));

// database
//     .ref()
//     .set({
//         name: "Emanuele Loreti",
//         age: 24,
//         stressLevel: 6,
//         job: {
//             title: "Software developer",
//             company: "Google"
//         },
//         location: {
//             city: "Roma",
//             country: "Italia"
//         }})
//     .then(() => console.log("Data is saved"))
//     .catch((e) => console.log("This failed.", e));

// database
//     .ref()
//     .update({
//         stressLevel: 9,
//         "job/company": "Amazon",
//         "location/city": "Seattle"
//     });
