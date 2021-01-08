class bob {
  constructor(x, y, r) {
    var options = {
      restitution:1,
      friction:2,
      density:4,
      isStatic:false
    };
    this.body = Bodies.circle(x, y, 25, options);
    World.add(world, this.body);
   this.radius = r;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);

    fill("blue");
    ellipseMode(this.radius)
    ellipse(0,0, 50);




    pop();
  }
}
