import React from 'react';
import Sketch from 'react-p5'


function ArcLengthSketch(props) {

    function setup(p5, parent) {
        var w = 800, h1 = 600;
        var f = (x) => p5.sin(x);
        var f1 = (x) => p5.cos(x);

        var maxLine = w / 2;
        var back;
        var label = true;
        var anim = true;
        var time = 0;
        var dt = 0.5;
        var paused = true;
        c = getColors();
        if (mobile === false) {
            createCanvas(w, h1);
        } else {
            createCanvas(screen.width - 40, h1 / 2);
        }
        setWindow(-0.01, 3 * PI, -3, 3);
        background(BGCOLOR);

        // axes
        stroke(255, 100);
        drawAxes();

        // grid lines
        stroke(255, 30);
        drawGridlines();

        // function graph
        strokeWeight(10);
        stroke(tintColor(c.i, 0.5));
        graph(f);

        back = get(0, 0, width, height);
        playButton();
        noLoop();
    }

    function draw() {
        image(back, 0, 0);
        const n = anim ? time / 30 + 2 : map(constrain(mouseX, 0, width), 0, width, 2.97, maxLine * 0.5);
        const a = 0, b = 3 * PI, deltaX = (b - a) / n;

        stroke(255);
        strokeWeight(2);

        let distance = 0;

        for (let x0 = 0; x0 < b - 0.001; x0 += deltaX) {
            const m = f1(x0);
            const y = (x) => m * (x - x0) + f(x0);
            const p1 = worldToScreen(x0, y(x0));
            const p2 = worldToScreen(x0 + deltaX, y(x0 + deltaX));
            line(p1.i, p1.j, p2.i, p2.j);

            distance += dist(p1.i, p1.j, p2.i, p2.j);
        }

        if (time < maxLine * 30 - 60) {
            time += dt;
        } else {
            time = maxLine * 30 - 60;
        }


        // labels
        if (!label) return;
        textSize(20);
        noStroke();
        fill(255);
        text("n: " + floor(n), width * 0., 35);
        text("distance: " + nround(distance, 3), width * 0.5, 35);

        if (paused) playButton();
    }




    // user input

    function mouseClicked() {
        if (paused) {
            paused = false;
            loop();
        } else {
            time = mouseX;
            anim = !anim;
        }
    }

    function keyReleased() {
        if (keyCode == 32) label = !label;
        if (keyCode == 27 && paused == false) {
            setup();
            paused = true;
        }
    }

    function touchStarted() {
        if (paused && mobile) {
            paused = false;
            loop();
            return;
        }
    }
}