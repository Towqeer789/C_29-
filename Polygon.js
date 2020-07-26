class Polygon {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.polygon = loadImage("sprites/polygon.png");
    
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    imageMode(CENTER);
    image(this.polygon,100,300,50,50);
  }
};