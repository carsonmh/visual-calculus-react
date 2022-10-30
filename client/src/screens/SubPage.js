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
    const script2 = document.createElement('script');
    const script3 = document.createElement('script');
    const body = document.getElementById('canvas-holder');
    const head = document.querySelector('head');
    const url =
      'https://cdn.jsdelivr.net/gh/carsonmh/visual-calculus-react@556edc722928b049583ddb2a11b0a63e231a0bef/client/src/visualizations/' +
      scriptString;
    const url2 =
      'https://cdn.jsdelivr.net/gh/carsonmh/visual-calculus-react@556edc722928b049583ddb2a11b0a63e231a0bef/client/src/visualizations/graphing.js';
    const url3 = 'https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js';
    script.setAttribute('src', url);
    script2.setAttribute('src', url2);
    script3.setAttribute('src', url3);
    body.appendChild(script);
    head.appendChild(script2);
    head.appendChild(script3);
    return () => {
      window.location.reload();
    };
  }, []);
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
