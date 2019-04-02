function platform(){
  this.x = w/2;
  this.y = h/2;
  this.width = 50;
  this.height = 50;
  this.show = function(){
    fill(color('green'));
    rect(this.x,this.y,this.width,this.height);
  }
}