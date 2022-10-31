import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UrlToScript from '../utils/UrlToScript';

function SubPage() {
  // https://cdn.jsdelivr.net/gh/carsonmh/calculus-website@172aef7b0921a488b69d72ada4ebbc8cfb1ac47e/visualizations/arc-length.js
  // https://cdn.jsdelivr.net/gh/carsonmh/calculus-website@172aef7b0921a488b69d72ada4ebbc8cfb1ac47e/visualizations/graphing.js
  const { item } = useParams();
  const scriptString = UrlToScript(item);
  const [title, setTitle] = React.useState(item);
  React.useEffect(() => {
    const script = document.createElement('script');
    const body = document.getElementById('canvas-holder');
    const url =
      'https://cdn.jsdelivr.net/gh/carsonmh/visual-calculus-react@a2b5aff9b107a1dbc1e422cc82f2318d7ab9df0b/client/src/visualizations/' +
      scriptString;
    script.setAttribute('src', url);
    body.appendChild(script);
    return () => {
      window.location.reload();
    };
  }, [item]);
  return (
    <>
      <Navbar />
      <div className="element">
        <h1 className="element-header">{title}</h1>
        {/* <Visualization item={item} /> */}
        <div id="canvas-holder"></div>
      </div>
    </>
  );
}

export default SubPage;
