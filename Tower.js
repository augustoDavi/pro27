class Tower{
  constructor(x, y, w, h)
 {
 var options = {isStatic:true};

 this.image = loadImage("assets/Tower.png")
 this.width = w;
 this.height = h;

 this.body = bodies.rectangle(x, y, this.w, this.h, options);

 World.add(world, this.body);

 }

 display(){

  var pos = this.body.position;
  var angle = this.body.angle;

  push();

  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);

  pop();
  
 }

}