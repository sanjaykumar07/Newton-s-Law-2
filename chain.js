class Chain{
  constructor(body1, body2, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: body1,
      bodyB: body2,
      pointB: { x: this.offsetX, y: this.offsetY },
    };
    

    this.rope = Matter.Constraint.create(options);
    World.add(world,this.rope)
}

display(){
  
  strokeWeight(9);
  fill("green")
  line (this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x + this.offsetX, this.rope.bodyB.position.y);
  
 
}
}
