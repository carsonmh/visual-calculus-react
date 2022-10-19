class Graph {
  constructor(p5) {
    //environment variables
    this.p5 = p5;
    const clientWidth = window.innerWidth;
    if (clientWidth < 700) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
    this.BGCOLOR = 'rgb(0, 0, 20)';

    // window dimensions control
    this.xmax = 0;
    this.xmin = 0;
    this.xstep = 0;
    this.ymax = 0;
    this.ymin = 0;
    this.ystep = 0;
  }

  setWindow(x_min, x_max, y_min, y_max) {
    this.xmin = x_min;
    this.xmax = x_max;
    this.xstep = (this.xmax - this.xmin) / this.p5.width;
    this.ymin = y_min;
    this.ymax = y_max;
    this.ystep = (this.ymax - this.ymin) / this.p5.height;
  }

  // initialize graphing space (to be called in setup)
  getColors() {
    return {
      r: this.p5.color(204, 2, 2),
      o: this.p5.color(230, 146, 56),
      y: this.p5.color(241, 194, 49),
      g: this.p5.color(105, 168, 79),
      c: this.p5.color(69, 130, 141),
      b: this.p5.color(62, 132, 198),
      i: this.p5.color(102, 78, 167),
      v: this.p5.color(166, 77, 120),
    };
  }

  drawAxes() {
    const yax1 = this.worldToScreen(0, this.ymin);
    const yax2 = this.worldToScreen(0, this.ymax);
    // top bottom
    this.p5.line(yax1.i, yax1.j, yax2.i, yax2.j);
    const xax1 = this.worldToScreen(this.xmin, 0);
    const xax2 = this.worldToScreen(this.xmax, 0);
    this.p5.line(xax1.i, xax1.j, xax2.i, xax2.j);
  }

  drawGridlines() {
    for (let i = this.p5.round(this.ymin) - this.ymin; i < this.ymax - this.ymin; i++) {
      this.p5.line(0, this.p5.height - i / this.ystep, this.p5.width, this.p5.height - i / this.ystep);
    }
    for (let i = this.p5.round(this.xmin) - this.xmin; i < this.xmax - this.xmin; i++) {
      this.p5.line(i / this.xstep, this.p5.height, i / this.xstep, 0);
    }
  }

  makePolarGraph() {
    //makes the layout for the polar graph
    this.p5.background(this.BGCOLOR);
    this.p5.noFill();
    this.p5.stroke(255, 50);
    this.p5.strokeWeight(1);
    this.p5.circle(this.wts(0, 0).i, this.wts(0, 0).j, 1 * (2 / this.xstep));
    this.p5.circle(this.wts(0, 0).i, this.wts(0, 0).j, 2 * (2 / this.xstep));
    this.p5.circle(this.wts(0, 0).i, this.wts(0, 0).j, 3 * (2 / this.xstep));
    this.p5.circle(this.wts(0, 0).i, this.wts(0, 0).j, 4 * (2 / this.xstep));
    this.p5.circle(this.wts(0, 0).i, this.wts(0, 0).j, 5 * (2 / this.xstep));
    this.p5.strokeWeight(2);
    this.p5.stroke(150, 75);
    this.p5.line(this.wts(0, 5).i, this.wts(0, 5).j, this.wts(0, -5).i, this.wts(0, -5).j);
    this.p5.line(this.wts(5, 0).i, this.wts(5, 0).j, this.wts(-5, 0).i, this.wts(-5, 0).j);
  }

  // utilities

  graph(f, res, start, end, clr) {
    if (!start) start = 0;
    if (!end) end = this.p5.width;
    this.p5.noFill();
    let pi = start;
    let pj = this.screenY(f, pi);
    for (let i = start + 1; i < end; i += res || 1) {
      const x = this.screenToWorld(i, 0).x;
      const j = this.worldToScreen(0, f(x)).j;
      if (clr) clr(f(x));
      this.p5.line(pi, pj, i, j);
      pi = i;
      pj = j;
    }
    return { i: pi, j: pj };
  }

  slopeField(dydx, xres, yres, len, clr) {
    const deltaX = (this.xmax - this.xmin) / xres;
    const deltaY = (this.ymax - this.ymin) / yres;
    for (let x = this.xmin; x < this.xmax; x += deltaX) {
      for (let y = this.ymin; y < this.ymax; y += deltaY) {
        const m = dydx(x, y);
        const p1 = this.worldToScreen(x, y);
        const tanline = (xi) => m * (xi - x) + y;
        const p2 = this.worldToScreen(x + len, tanline(x + len));
        const d = this.p5.createVector(p2.i - p1.i, p2.j - p1.j).normalize();

        this.p5.push();
        this.p5.translate(p1.i, p1.j);
        if (clr) clr(m);
        this.p5.line(0, 0, d.x * len, d.y * len);
        this.p5.translate(d.x * len, d.y * len);
        this.p5.rotate(this.p5.atan2(d.y * len, d.x * len));
        this.p5.line(0, 0, -2, 2);
        this.p5.line(0, 0, -2, -2);
        this.p5.pop();
      }
    }
  }

  nround(x, n) {
    const p = n || 1;
    return this.p5.round(x * this.p5.pow(10, p)) / this.p5.pow(10, p);
  }

  dash(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let d = this.p5.sqrt(this.p5.sq(dx) + this.p5.sq(dy));
    let a = this.p5.atan2(dy / dx);

    this.p5.push();
    this.p5.translate(this.p5.min(x1, x2), this.p5.min(y1, y2));
    this.p5.rotate(a);
    for (let i = 0; i < this.p5.floor(d / 10); i++) {
      this.p5.line(0, i * 10, 0, i * 10 + 2);
    }
    this.p5.pop();
  }

  tintColor(c, m, a) {
    return this.p5.color(this.p5.red(c) * m, this.p5.green(c) * m, this.p5.blue(c) * m, a || 255);
  }

  // world/screen coordinate conversions

  screenToWorld(i, j) {
    return { x: this.xmin + i * this.xstep, y: this.ymax - j * this.ystep };
  }

  worldToScreen(x, y) {
    return { i: (x - this.xmin) / this.xstep, j: (y - this.ymax) / -this.ystep };
  }
  wts(x, y) {
    return { i: (x - this.xmin) / this.xstep, j: (y - this.ymax) / -this.ystep };
  }

  screenY(f, i) {
    const x = this.screenToWorld(i, 0).x;
    return this.worldToScreen(0, f(x)).j;
  }

  ptw(r, theta) {
    //converts r and theta to x and y coordinates
    return { x: r * this.p5.sin(theta), y: r * this.p5.cos(theta) };
  }

  pts(r, theta) {
    //converts polar coordinates to coordinates that we can use with code
    let wc = this.ptw(this.p5, r, theta);
    let sc = this.worldToScreen(wc.x, wc.y);
    return { i: sc.i, j: sc.j };
  }

  // play button

  playButton() {
    this.p5.fill(0, 180);
    this.p5.rect(0, 0, this.p5.width, this.p5.height);
    const r = 40;
    this.p5.push();
    this.p5.translate(this.p5.width / 2 + r / 3, this.p5.height / 2);
    this.p5.fill(255, 100);
    this.p5.strokeWeight(3);
    this.p5.stroke(255);
    this.p5.triangle(-r, -r, r, 0, -r, r);
    this.p5.pop();
  }
}

export default Graph;
