class Player {
  constructor(x, y, maxSize, size, active, color){

this.x = x;
this.y = y;
this.maxSize = maxSize;
this.size = size;
this.active = active;
this.color = color;

}




function displayPlayer() {
  push();
  noStroke();
  fill(player.color);
  ellipse(player.x, player.y, player.size);
  pop();
}
}
