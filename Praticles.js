class Particles{ 
    constructor(x,y) { 
        var options ={ restitution:1.0, friction:1.0, density:1.0} 
        this.body = Bodies.circle(x,y,5,options); 
        this.radius = 5; 
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body); 
    } 
    
    display() { 
        var pos = this.body.position; 
        push(); 
        ellipseMode(RADIUS);  
        fill(this.color);
        ellipse(pos.x,pos.y,this.radius,this.radius); 
        pop(); 
    } 
    

    /*score() {
        var pos = this.body.position;
        if(pos.y > 350){
            if(pos.x < 150){
                score = score + 500;
            }
            //if(pos.x > 151 && pos.x < 250){
           //     score
           // }    
        }
    }*/
}    