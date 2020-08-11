class Paper{
    constructor(x,y){
        var options= {
            isStatic:false, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        } 
        this.image=loadImage("Sprites/paper.png"); 
        this.body = Bodies.circle(x,y,70,options);
        this.radius= 70
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("white");
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }

}