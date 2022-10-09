import React from "react";
import ReactScetch from "../visualizations/ReactScetch";

function Visualization({ fileName }) {
    const filepath = "../visualizations/" + fileName;
    console.log(filepath);
    return (
        <div id="canvas-holder">
            only run once please
            < ReactScetch />
        </div>
    );
}

export default Visualization;