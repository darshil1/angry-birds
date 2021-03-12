class Pig extends BaseClass{
    constructor(x, y) {
      super(x,y, 50, 50)
      this .visibility=255
      this.image = loadImage("sprites/enemy.png")

    }
     display(){
      if (this.body.speed<3){
        //visible on the screen
      super.display()
      
      }
      else{
        //disappear from the screen
        push()
        var pos = this.body.position
        this.visibility=this.visibility-5
        World.remove(world, this.body);
        tint(255, this.visibility);
        
        image(this.image,pos.x,pos.y,50,50)
        pop()
      }

     }
  };
  