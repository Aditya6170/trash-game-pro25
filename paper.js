class Paper {
constructor(x,y,r){
    var options = {
     friction:0.5,
     restitution:0.6,
     density:1.2

    }
    this.r = r;

 this.body= Bodies.circle(x,y, this.r/2,options);
 this.image = loadImage("paper.png");
 World.add(world,this.body);

}

display(){

 var pose= this.body.position;
 push()
 translate(pose.x, pose.y);
 strokeWeight(3);
 fill(255,0,255)
 imageMode(CENTER);
 this.image.scale = 0.1;
 image(this.image, 0, 0, 110, 110);
 //ellipse(0,0,  this.r,  this.r);
 pop();
 
}
}