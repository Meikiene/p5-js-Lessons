function barrier(){
  this.gravity = 1;
  this.velocity = 12;
  this.height = Math.floor(Math.random() * 257);
  this.width = Math.floor(Math.random() * 257);
  this.x = w - this.width;
  this.y = Math.floor((Math.random() * h) + 10);
  this.show = function(){
   fill(color('blue'));
   rect(this.x,this.y,this.width, this.height);
  }
  this.update = function(){
    //this.velocity += this.gravity; //continually speeds up object to the left
    this.x -= this.velocity;
    if (this.x < (0 - this.width)){
      this.x = w - this.width;
      this.y = Math.floor((Math.random() * h) + 10);
      this.width = Math.floor(Math.random() * 257);
      this.height = Math.floor(Math.random() * 257);
      score += 1;
      document.getElementById("scoreID").innerHTML = "Your Score: " + score;
    }
    else if (score == 15){
      this.velocity = 14;
    }
  }
}
function barrier2(){
  this.gravity = 1;
  this.velocity = 10;
  this.height = Math.floor(Math.random() * 257);
  this.width = Math.floor(Math.random() * 257);
  this.x = w - this.width;
  this.y = Math.floor((Math.random() * h) + 10);
  this.show = function(){
   fill(color('yellow'));
   rect(this.x,this.y,this.width, this.height);
  }
  this.update = function(){
    //this.velocity += this.gravity; //continually speeds up object to the left
    this.x -= this.velocity;
    if (this.x < (0 - this.width)){
      this.x = w - this.width;
      this.y = Math.floor((Math.random() * h) + 10);
      this.width = Math.floor(Math.random() * 257);
      this.height = Math.floor(Math.random() * 257);
      score += 1;
      document.getElementById("scoreID").innerHTML = "Your Score: " + score;
    }
    else if (score == 15){
      this.velocity = 12;
    }
  }
}
function barrier3(){
  this.gravity = 1;
  this.velocity = 8;
  this.height = Math.floor(Math.random() * 257);
  this.width = Math.floor(Math.random() * 257);
  this.x = w - this.width;
  this.y = Math.floor((Math.random() * h) + 10);
  this.show = function(){
   fill(color("orange"));
   rect(this.x,this.y,this.width, this.height);
  }
  this.update = function(){
    //this.velocity += this.gravity; //continually speeds up object to the left
    this.x -= this.velocity;
    if (this.x < (0 - this.width)){
      this.x = w - this.width;
      this.y = Math.floor((Math.random() * h) + 10);
      this.width = Math.floor(Math.random() * 257);
      this.height = Math.floor(Math.random() * 257);
      score += 1;
      document.getElementById("scoreID").innerHTML = "Your Score: " + score;
    }
    else if (score == 15){
      this.velocity = 10;
    }
  }
}