//Generate all individual Cells
function generateCells() {

  for (let i = 20; i < 650; i += cellSize) {
    for (let j = 25; j < 650; j += cellSize) {
      cells.push(new Cell(j, i, cellSize));
    }
  }

  //Mark Start and End of the Maze
  cells[0].start = true;
  cells.at(-1).end = true;
}

//Generate the Maze [Recursive implementation]
//This Algorithm uses Depth-First-Search and Backtracking
//Algorithm adapted from Wikipedia: https://en.wikipedia.org/wiki/Maze_generation_algorithm
/*
    1. Given a current cell as a parameter
    2. Mark the current cell as visited
    3. While the current cell has any unvisited neighbor cells
       1. Choose one of the unvisited neighbors
       2. Remove the wall between the current cell and the chosen cell
       3. Invoke the routine recursively for the chosen cell
*/

function generateMaze(cell) {

  //2. Mark the current cell as visited
  cell.visited = true;

  //3. While...
  while (true) {

    cell.mazeGeneratorCollectNeighbors();

    //....the current cell has any unvisited neighbor Cells...
    if (cell.neighbors.length) {

      //3.1. Choose one of the unvisited Neighbors
      let randomNeighbor = cell.neighbors.splice(floor(random(0, cell.neighbors.length)), 1)[0];

      //3.2. Remove the Wall between the current Cell and the chosen Cell
      removeWalls(cell, randomNeighbor);

      //3.3. Invoke the Routine recursively for the chosen Cell
      generateMaze(randomNeighbor);
    } else {

      //Set initial Values for the Pathfinding Algo's, then return
      LHoWNextCell = cells[0];
      BFSCurrentCell = cells[0];
      AStarCurrentCell = cells[0];
      return;
    }
  }
}

//Remove Walls between neighboring, connected Cells
function removeWalls(cell, randomNeighbor) {
  //Remove Upper Wall
  if (cell.y > randomNeighbor.y) {
    cell.walls[0] = 0;
    randomNeighbor.walls[2] = 0;

    //Remove Lower Wall
  } else if (cell.y < randomNeighbor.y) {
    cell.walls[2] = 0;
    randomNeighbor.walls[0] = 0;

    //Remove Left Wall
  } else if (cell.x > randomNeighbor.x) {
    cell.walls[3] = 0;
    randomNeighbor.walls[1] = 0;

    //Remove Right Wall
  } else if (cell.x < randomNeighbor.x) {
    cell.walls[1] = 0;
    randomNeighbor.walls[3] = 0;
  }
}

//Reset the Maze
function resetMaze() {

  //Reset the Maze-Solving Algorithm
  mazeAlgorithm = "";

  //Remove all old Cells
  cells = [];

  //New blank Canvas
  background(0);

  //Display Text
  displayText();

  //Adapt Cell-Size to the Slider-Vaue
  cellSize = cellSizeSlider.value();

  //Adapt Stroke-Weight to the Cell-Size 
  strokeWeight(map(cellSizeSlider.value(), 10, 50, 2, 7))

  //Generate a new Set of Cells
  generateCells();

  //Generate a new Maze
  generateMaze(cells[0]);

  //Reset the Right Hand on Wall Algo's Values
  resetRightHandOnWall();

  //Reset the Breadth First Search Algo's Values
  resetBreadthFirstSearch();

  //Reset the A* Algo's Values
  resetAStar();
}