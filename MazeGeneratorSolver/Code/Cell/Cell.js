class Cell {

  constructor(_x, _y, _s) {
    this.x = _x;
    this.y = _y;
    this.size = _s;
    this.walls = [1, 1, 1, 1];
    this.visited = false;
    this.neighbors = [];
    this.backGround = null;
  }

  //Check if this Cell is on the Edge of the Maze
  checkEdge(direction) {
    if (direction === "UP" && this.y > 0
      || direction === "RIGHT" && this.x < 650
      || direction === "DOWN" && this.y < 650
      || direction === "LEFT" && this.x > 0) return true;
    return false;
  }

  //Collect all non-visited neighboring Cells and push them to this.neighbors
  mazeGeneratorCollectNeighbors() {

    this.neighbors = [];

    //Go through all Cells
    cells.forEach(cell => {
      if (!cell.visited) {
        //Check Upper Neighbor
        if (this.checkEdge("UP") && this.x === cell.x && this.y - this.size === cell.y) this.neighbors.push(cell);
        //Check Right Neighbor
        if (this.checkEdge("RIGHT") && this.y === cell.y && this.x + this.size === cell.x) this.neighbors.push(cell);
        //Check Lower Neighbor
        if (this.checkEdge("DOWN") && this.x === cell.x && this.y + this.size === cell.y) this.neighbors.push(cell);
        //Check Left Neighbor
        if (this.checkEdge("LEFT") && this.y === cell.y && this.x - this.size === cell.x) this.neighbors.push(cell);

      }
    });
  }

  //Collect all reachable Neighbors of the Cell to this.neighbors
  mazeSolverCollectNeighbors() {

    this.neighbors = [];

    //Upper Neighbor
    if (this.checkEdge("UP") && !this.walls[0]) this.neighbors.push(cells.find(c => c.x === this.x && c.y === this.y - this.size));
    //Right Neighbor
    if (this.checkEdge("RIGHT") && !this.walls[1]) this.neighbors.push(cells.find(c => c.x === this.x + this.size && c.y === this.y));
    //Lower Neighbor
    if (this.checkEdge("DOWN") && !this.walls[2]) this.neighbors.push(cells.find(c => c.x === this.x && c.y === this.y + this.size));
    //Left Neighbor
    if (this.checkEdge("LEFT") && !this.walls[3]) this.neighbors.push(cells.find(c => c.x === this.x - this.size && c.y === this.y));
  }

  //Display the Cell
  display() {

    //Draw a Line for each Wall of the Cell
    if (this.walls[0]) line(this.x, this.y, this.x + this.size, this.y); //Top-Wall
    if (this.walls[1]) line(this.x + this.size, this.y, this.x + this.size, this.y + this.size); //Right-Wall
    if (this.walls[2]) line(this.x, this.y + this.size, this.x + this.size, this.y + this.size); //Bottom-Wall
    if (this.walls[3]) line(this.x, this.y, this.x, this.y + this.size); //Left-Wall

    //Color Cells according to their state
    //Cells get different Colors depending on what Pathfinding-Algorithm has visited them
    //Cells get highlighted if they're the currently visited Cell
    //Cells get a really bright Color if they're part of the optimal Path through the Maze
    if (this.backGround) {
      push();
      noStroke();
      if (this.backGround === "RHoWVisited") fill(0, 100, 100);
      if (this.backGround === "BFSVisited") fill(100, 50, 150);
      if (this.backGround === "AStarVisited") fill(0, 50, 150);
      if (this.backGround === "highlight") fill(255, 0, 0);
      if (this.backGround === "OptimalPath") fill(255, 255, 0);
      rect(this.x + Math.floor(this.size * 0.15), this.y + Math.floor(this.size * 0.15), this.size * 0.7, this.size * 0.7, map(cellSizeSlider.value(), 10, 70, 2, 20))
      pop();
    }

    //Color Start & End of the Maze
    if (this.start || this.end) {
      push();
      noStroke();
      fill(200, 0, 255)
      rect(this.x + Math.floor(this.size * 0.15), this.y + Math.floor(this.size * 0.15), this.size * 0.75);
      pop();
    }
  }
}