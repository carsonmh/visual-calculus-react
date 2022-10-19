import React from 'react';
import './App.css';
import './styles/style.css';
import Main from './screens/Main';
import SubPage from './screens/SubPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
          <Route exact path={'/'} element={<Main />} />
          <Route path={'/sub-item/:item'} element={<SubPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
