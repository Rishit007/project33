class Plinko{ 
    constructor(x,y) { 
        var options ={ restitution:1.0, friction:1.0, density:1.0, isStatic:true } 
        this.body = Bodies.circle(x,y,5,options); 
        this.radius = 5; 
        World.add(world,this.body); 
    } 
    
    display() { 
        var pos = this.body.position; 
        push(); 
        ellipseMode(RADIUS);  
        fill(255);
        ellipse(pos.x,pos.y,this.radius,this.radius); 
        pop(); 
        } 
    }