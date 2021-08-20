class OBS {
    constructor(x, y, height, width) {
      var options = {
          'restitution':0.1,
          'friction':0.9,
          'isStatic':true,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      fill(255,0,255)
      imageMode(CENTER);
      this.image.scale = 0.1;
      image(this.image, 0, 0, 220, 220);
      //rectMode(CENTER);
      //fill("blue");
      //rect(0, 0, this.width, this.height);
     
      pop();
    }
  };