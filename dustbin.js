class Dustbin{
    constructor(x, y) {
        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;
        this.angle = 0;

        var options ={
            isStatic:true,
        }
        this.bottom=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,options)
        World.add(world,this.bottom)
        this.leftbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,options);
        Matter.Body.setAngle(this.leftbody,this.angle);
        World.add(world,this.leftbody)
        this.rightbody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,options);
        Matter.Body.setAngle(this.rightbody,-1*this.angle);
        World.add(world,this.rightbody)
    }
    display(){
    var posbottom =this.bottom.position;
    var posleft=this.leftbody.position;
    var posright=this.rightbody.position;
    
    //bottom of dustbin
    rectMode(CENTER);
    fill("magenta");
    rect(posbottom.x,posbottom.y, this.dustbinwidth, this.wallthickness);

    //left of dustbin
    var angle=this.leftbody.angle;
    push()
    translate(posleft.x,posleft.y)
    angleMode(RADIANS)
    rotate(angle)
    rectMode(CENTER);
    fill("magenta");
    rect(0,0, this.wallthickness, this.dustbinheight);
    pop()

    //right of dustbin
    var rightangle=this.rightbody.angle;
    push()
    translate(posright.x,posright.y)
    angleMode(RADIANS)
    rotate(rightangle)
    rectMode(CENTER);
    fill("magenta");
    rect(0,0, this.wallthickness, this.dustbinheight);
    pop()
    
    }
}