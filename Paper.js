class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            isStatic:false,
            density:10,
            friction:0
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
        pop();

    }
}