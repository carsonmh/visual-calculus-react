const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get, set } = require('firebase/database');
const { makeid } = require('./utils.js');
const firebaseConfig = {
  apiKey: 'AIzaSyCa3N7w6Yp0q_MrR_O1DnnqyIK9WhvVP68',
  authDomain: 'visual-calculus.firebaseapp.com',
  projectId: 'visual-calculus',
  storageBucket: 'visual-calculus.appspot.com',
  messagingSenderId: '360090119263',
  appId: '1:360090119263:web:725d6fad8d75ef7de6ffea',
  measurementId: 'G-4VQ2SBR8ED',
  databaseURL: 'https://visual-calculus-default-rtdb.firebaseio.com/',
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);
const dbRef = ref(database);

function getData(res) {
  get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        res.send(snapshot.val());
      } else {
        return 'no data available';
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function writeNewUser(username, email) {
  const id = makeid(5);
  set(ref(database, 'users/' + id), {
    username: username,
    email: email,
  });
}

exports.getData = getData;
exports.writeNewUser = writeNewUser;
