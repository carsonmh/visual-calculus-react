import React from "react";
import Sketch from "react-p5";
import Graph from './graphing';

export default function ReactSketch(props) {
    const setup = (p, parent) => {
        p.createCanvas(500, 500).parent(parent);
        console.log(c);
    }

    const draw = (p) => {
        p.background(255, 255, 0);
    }

    return <Sketch draw={draw} setup={setup} />
}