//Flag is true when the optimal path has been drawn
let optimalPathDrawn = false;

//Draw the optimal Path through the Maze from Start to Finish
function drawOptimalPath(cell, algo) {

  //Draw the optimal Path
  while (cell.parent) {
    cell.backGround = "OptimalPath";
    cell = cells.find(c => c === cell.parent);
  }
  optimalPathDrawn = algo;
}