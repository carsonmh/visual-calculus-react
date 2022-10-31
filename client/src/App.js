import React, { useEffect } from 'react';
import './App.css';
import './styles/style.css';
import Main from './screens/Main';
import SubPage from './screens/SubPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/accounts/Register';
import Login from './components/accounts/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase-config';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  const [userLoggedIn, setUserLoggedIn] = React.useState(false || window.localStorage.getItem('auth') === 'true');
  const [idToken, setIdToken] = React.useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        setUserLoggedIn(true);
        window.localStorage.setItem('auth', true);
        userCred.getIdToken().then((token) => {
          setIdToken(token);
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
          <Route exact path={'/'} element={<Main />} />
          <Route path={'/sub-item/:item'} element={<SubPage />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
