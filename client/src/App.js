import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";
import Visualization from "./components/Visualization";

function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      please fucking work
      <Visualization />
    </div>
  );
}

export default App;
