function barrier(){
  this.gravity = 1;
  this.velocity = 5;
  this.height = 100;
  this.width = 100;
  this.x = w - this.width;
  this.y = Math.floor((Math.random() * h) + 10);
  this.show = function(){
   //this.x;
   //this.y;
   fill(color('blue'));
   rect(this.x,this.y,this.width, this.height);
  }
  this.update = function(){
    //this.velocity += this.gravity; //continually speeds up object to the left
    this.x -= this.velocity;
  }
}