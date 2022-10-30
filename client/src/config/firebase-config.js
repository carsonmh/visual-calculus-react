import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCa3N7w6Yp0q_MrR_O1DnnqyIK9WhvVP68',
  authDomain: 'visual-calculus.firebaseapp.com',
  databaseURL: 'https://visual-calculus-default-rtdb.firebaseio.com',
  projectId: 'visual-calculus',
  storageBucket: 'visual-calculus.appspot.com',
  messagingSenderId: '360090119263',
  appId: '1:360090119263:web:725d6fad8d75ef7de6ffea',
  measurementId: 'G-4VQ2SBR8ED',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
