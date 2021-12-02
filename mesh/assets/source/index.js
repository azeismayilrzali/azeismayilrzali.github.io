document.addEventListener("DOMContentLoaded", function () {
  // let canvas, ctx, w, h, laser, text, particles, input;

  // function Spark(options) {
  //   options = options || {};
  //   this.x = options.x || w * 0.5;
  //   this.y = options.y || h * 0.5;
  //   this.v = options.v || {
  //     direct: Math.random() * Math.PI * 2,
  //     weight: Math.random() * 10 + 5,
  //     friction: 0.78,
  //   };
  //   this.a = options.a || {
  //     change: Math.random() * 0.2 - 0.001,
  //     min: this.v.direct - Math.PI * 0.4,
  //     max: this.v.direct + Math.PI * 0.4,
  //   };
  //   this.g = options.g || {
  //     direct: Math.PI * 0.5,
  //     weight: Math.random() * 0.5 - 1.2,
  //   };
  //   this.width = options.width || Math.random() * 1;
  //   this.lifespan = options.lifespan || Math.round(Math.random() * 20 + 40);
  //   this.maxlife = this.lifespan;
  //   this.color = options.color || "#fdab23";
  //   this.prev = { x: this.x, y: this.y };
  //   this.update = function (index, array) {
  //     this.prev = { x: this.x, y: this.y };
  //     this.x += Math.cos(this.v.direct) * this.v.weight;
  //     this.x += Math.cos(this.g.direct) * this.g.weight;
  //     this.y += Math.sin(this.v.direct) * this.v.weight;
  //     this.y += Math.sin(this.g.direct) * this.g.weight;
  //     this.v.weight *= this.v.friction;
  //     this.v.direct += this.a.change;
  //     (this.v.direct > this.a.max || this.v.direct < this.a.min) &&
  //       (this.a.change *= -1);
  //     this.lifespan > 0 && this.lifespan--;
  //     this.lifespan <= 0 && this.remove(index, array);
  //   };

  //   this.render = function (ctx) {
  //     if (this.lifespan <= 0) return;
  //     ctx.beginPath();
  //     ctx.globalAlpha = (this.lifespan / this.maxlife);
  //     ctx.strokeStyle = this.color;
  //     ctx.lineWidth = this.width;
  //     ctx.moveTo(this.x, this.y);
  //     ctx.lineTo(this.prev.x, this.prev.y);
  //     ctx.stroke();
  //     ctx.closePath();
  //   };

  //   this.remove = function (index, array) {
  //     array.splice(index, 1);
  //   };
  // }

  // function Particles(options) {
  //   options = options || {};
  //   this.max = options.max || Math.round(Math.random() * 10 + 170);
  //   this.sparks = [...new Array(this.max)].map(() => new Spark(options));

  //   this.update = function () {
  //     this.sparks.forEach((s, i) => s.update(i, this.sparks));
  //   };

  //   this.render = function (ctx) {
  //     this.sparks.forEach((s) => s.render(ctx));
  //   };
  // }
  // function loop() {
  //   update();
  //   render();
  //   requestAnimationFrame(loop);
  // }
  // function update() {
  //   particles.forEach((p) => p.update());
  // }

  // function render() {
  //   ctx.globalCompositeOperation = "source-out";
  //   ctx.globalAlpha = 0;
  //   ctx.fillStyle = "black";
  //   ctx.fillRect(0, 0, w, h);

  //   ctx.globalCompositeOperation = "screen";

  //   particles.forEach((p) => p.render(ctx));
  // }
  // canvas = document.getElementById("canvas");
  // ctx = canvas.getContext("2d");
  // w = 400;
  // h = 50;
  // canvas.width = w;
  // canvas.height = h;
  // particles = [];
  // var sparkAnimation = function (x, y) {
  //   //

  //   //

  //   // canvas.addEventListener("click", (e) => {
  //   //   const x = e.offsetX;
  //   //   const y = e.offsetY;

  //   //   console.log(x);
  //   //   console.log(y);
  //   particles.push(
  //     new Particles({
  //       x: x,
  //       y: y,
  //     })
  //   );
  //   // });
  //   //

  // };
  // loop();

  // var lazer = function () {
  //   var timeline = gsap.timeline({
  //     repeat: -1,

  //   });
  //   timeline
  //     .to("#cihaz1", 6, { x: 340, delay: 1 })
  //     .to("#cihaz1-lazer", 6, { x: 355 }, "<")

  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(90, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 70 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 40 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(160, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(200, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 70 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 40 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(265, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(275, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 70 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 40 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(330, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(350, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 70 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 40 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(360, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(365, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 70 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 40 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<")
  //     .add(function () { sparkAnimation(370, 45) }, ">")

  //     .to("#cihaz1", 8, { x: 0 })
  //     .to("#cihaz1-lazer", 8, { x: 15 }, "<")

  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(330, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(320, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 35 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 55 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(250, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(235, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(210, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(200, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 35 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 55 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(150, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(135, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(125, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(115, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 35 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 55 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(70, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(60, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(55, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(50, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 35 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 55 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(40, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(37, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 65 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(32, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(30, 45) }, ">")
  //     .to("#Rectangle_35", 0.2, { height: 35 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 55 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 50 }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 60 }, "<0.1")
  //     .to("#Rectangle_35", 0.2, { height: 25 }, "<")
  //     .to("#Rectangle_39", 0.2, { height: 45 }, "<")
  //     .to("#Rectangle_35", 0.2, { height: 60 }, ">")
  //     .add(function () { sparkAnimation(26, 45) }, ">")
  //     .to("#Rectangle_39", 0.2, { height: 80 }, "<0.1")
  //     .add(function () { sparkAnimation(26, 45) }, ">")
  // };

  // lazer();
});
