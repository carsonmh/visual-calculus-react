import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";
import Visualization from "./components/Visualization";
import Main from "./screens/Main";
import SubPage from "./screens/SubPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  const [item, setItem] = React.useState("");
  const [title, setTitle] = React.useState("");
  console.log(item);
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
          <Route exact path={"/"} element={<Main setItem={setItem} setTitle={setTitle} />} />
          <Route exact path={"/subItem"} element={<SubPage item={item} title={title} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
