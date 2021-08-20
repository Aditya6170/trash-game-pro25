class Log {
    constructor(x, y, height, width) {
      var options = {
          'restitution':0.1,
          'friction':0.9,
          'isStatic':true,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      
      pop();
    }
  };