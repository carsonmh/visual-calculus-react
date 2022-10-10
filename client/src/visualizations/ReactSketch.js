import React, { Component } from "react";
import Sketch from "react-p5";

export default function ReactSketch({ ...p }) {
    const setup = (p, parent) => {
        p.createCanvas(500, 500).parent(parent);
    }

    const draw = (p) => {
        p.background(255, 255, 255);
    }

    return <Sketch draw={draw} setup={setup} />
}