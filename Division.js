class Division{ 
    constructor(x,y,width,height) { 
        var options ={ restitution:0.8, friction:2.0, density:1.0 ,isStatic:true} 
        this.body = Bodies.rectangle(x,y,width,height,options); 
        this.width= width; 
        this.height = height;
        World.add(world,this.body); 
    } 
    
    display() { 
        var pos = this.body.position; 
         push(); 
         rectMode(CENTER);  
         fill(255);
         stroke(255);
         rect(pos.x,pos.y,this.width,this.height); 
         pop(); 
        } 
    }