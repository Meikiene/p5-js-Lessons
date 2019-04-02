function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity = 0.5; //the force of gravity
        this.lift = -10; //opposing force
        this.velocity = 0; //speed of the gravity
        
        this.show = function(){
          fill(color('red'));
          ellipse(this.x,this.y,50,50);
        }
        this.up = function(){
          this.velocity += this.lift;
        }
        this.update = function(){
          this.velocity += this.gravity;
          this.y += this.velocity;
          this.velocity *= 0.9;
          if (this.y > h) { //stop on floor
            this.y = h;
            this.velocity = -10;
          }
          if (this.y < 0) { //stop on ceiling.
            this.y = 0;
            this.velocity = 0;
          }
          if ((keyIsDown(65)) && (this.x > 0)){
           this.x += -10;
         }
         if (keyIsDown(68) && (this.x < w-25)){
           this.x +=10;
         }
        };
      }
      function keyPressed(){
        if (keyCode == 32) {
          jumper.up();
      }
      }