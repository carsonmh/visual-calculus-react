import React from 'react';
import Sketch from 'react-p5';
import Graph from '../utils/graphing';

function ArcLengthSketch(props) {
  const w = 800;
  const h1 = 600;

  let maxLine = w / 2;
  let back;
  let label = true;
  let anim = true;
  let time = 0;
  let dt = 0.5;
  let paused = true;
  const graph = new Graph();

  function setup(p5, parent) {
    var f = (x) => p5.sin(x);
    var f1 = (x) => p5.cos(x);
    let c = graph.getColors(p5);
    if (graph.mobile === false) {
      p5.createCanvas(w, h1).parent(parent);
    } else {
      p5.createCanvas(w - 40, h1 / 2).parent(parent);
    }
    graph.setWindow(-0.01, 3 * p5.PI, -3, 3, p5);
    p5.background(graph.BGCOLOR);

    // axes
    p5.stroke(255, 100);
    graph.drawAxes(p5);

    // grid lines
    p5.stroke(255, 30);
    graph.drawGridlines(p5);

    // function graph
    p5.strokeWeight(10);
    p5.stroke(graph.tintColor(p5, c.i, 0.5));
    graph.graph(p5, f);

    back = p5.get(0, 0, p5.width, p5.height);
    graph.playButton(p5);
    p5.noLoop();
  }

  function draw(p5) {
    var f = (x) => p5.sin(x);
    var f1 = (x) => p5.cos(x);
    p5.image(back, 0, 0);
    const n = anim ? time / 30 + 2 : p5.map(p5.constrain(p5.mouseX, 0, p5.width), 0, p5.width, 2.97, maxLine * 0.5);
    const a = 0,
      b = 3 * p5.PI;
    const deltaX = (b - a) / n;

    p5.stroke(255);
    p5.strokeWeight(2);

    let distance = 0;

    for (let x0 = 0; x0 < b - 0.001; x0 += deltaX) {
      const m = f1(x0);
      const y = (x) => m * (x - x0) + f(x0);
      const p1 = graph.worldToScreen(x0, y(x0));
      const p2 = graph.worldToScreen(x0 + deltaX, y(x0 + deltaX));
      p5.line(p1.i, p1.j, p2.i, p2.j);

      distance += p5.dist(p1.i, p1.j, p2.i, p2.j);
    }

    if (time < maxLine * 30 - 60) {
      time += dt;
    } else {
      time = maxLine * 30 - 60;
    }

    // labels
    if (!label) return;
    p5.textSize(20);
    p5.noStroke();
    p5.fill(255);
    p5.text('n: ' + p5.floor(n), p5.width * 0, 35);
    p5.text('distance: ' + graph.nround(p5, distance, 3), p5.width * 0.5, 35);

    if (paused) graph.playButton(p5);
  }

  // user input

  function mouseClicked(p5) {
    if (paused) {
      paused = false;
      p5.loop();
    } else {
      time = p5.mouseX;
      anim = !anim;
    }
  }

  function keyReleased(p5) {
    if (p5.keyCode == 32) label = !label;
    if (p5.keyCode == 27 && paused == false) {
      setup();
      paused = true;
    }
  }

  function touchStarted(p5) {
    if (paused && graph.mobile) {
      paused = false;
      p5.loop();
      return;
    }
  }

  return (
    <Sketch
      setup={setup}
      draw={draw}
      touchStarted={touchStarted}
      keyReleased={keyReleased}
      mouseClicked={mouseClicked}
    />
  );
}

export default ArcLengthSketch;
