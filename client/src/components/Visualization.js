import React from "react";
import ReactSketch from "../visualizations/ReactSketch";

function Visualization({ fileName }) {
    const filepath = "../visualizations/" + fileName;
    console.log(filepath);
    return (
        <div id="canvas-holder">
            < ReactSketch />
        </div>
    );
}

export default Visualization;