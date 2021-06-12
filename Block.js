class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        if ((this.body.speed)>3) {
          this.display()
         } else {
          this.Viiblity=this.visibility-5
          tint(225,this.visibility)
           World.remove(world,this.body)
           
         }
      }
      display(){
        
       console.log(this.body.speed)
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
       
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        
        pop();
      }
}