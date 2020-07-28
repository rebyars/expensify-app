import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-V4XV17H8CD"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Water bill',
//     amount: 50000,
//     note: '',
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Gas bill',
//     amount: 75000,
//     note: 'Was much higher this month',
//     createdAt: 10000
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 1000,
//     note: 'cheap rent',
//     createdAt: -1000
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// database.ref('notes/-MCn52eYWPiTn58Jblc7').remove();

// database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(22);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(22);
// }, 10500);
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref().set({
//     name: 'Riley Byars',
//     age: 21,
//     isSingle: false,
//     location: {
//         city: 'Tuscaloosa',
//         state: 'Alabama'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     name: 'Willa Green',
//     age: 20,
//     job: 'Doctor',
//     isSingle: null
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('remove succesful');
// }).catch((e) => {
//     console.log('remove failed', e);
// });