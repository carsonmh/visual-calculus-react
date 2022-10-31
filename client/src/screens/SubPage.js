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
    const head = document.querySelector('head');
    const url =
      'https://cdn.jsdelivr.net/gh/carsonmh/visual-calculus-react@3b63958f18d9c6f66fcbff233ab0f75fbd9d8148/client/src/visualizations/' +
      scriptString;
    // script.setAttribute('defer', '');
    script.setAttribute('src', url);
    head.appendChild(script);

    //best solution I could find ;(
    // setTimeout(() => {
    //   if (body.childElementCount < 2) {
    //     // window.location.reload();
    //     console.log(body.childElementCount);
    //   }
    // }, 100);
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
