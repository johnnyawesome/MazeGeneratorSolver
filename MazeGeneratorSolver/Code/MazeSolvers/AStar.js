//Open Set
let AStarOpenSet = [];
//Closed Set
let AStarClosedSet = [];

//The currently searched Cell for AStar()
let AStarCurrentCell = null;

//Flag is true when the Maze has been solved
let AStarFinished = false;

// The A* Algorithm
function AStar() {

  //If we solved the Maze...
  if (AStarFinished) {
    //...draw the optimal Path from Start to Finish...
    if (optimalPathDrawn !== mazeAlgorithm) drawOptimalPath(cells.find(c => c.end), mazeAlgorithm);
    //...and stop processing
    return;
  }

  //Add the Starting-Cell to the Open Set
  if (!AStarClosedSet.includes(cells[0])) AStarOpenSet.push(cells[0]);

  //The Cell with the lowest F-Cost
  AStarCurrentCell = AStarOpenSet.reduce((last, current) => { return (current.f < last.f || (current.f === last.f && current.h < last.h)) ? current : last; });

  //Remove the Cell from the open Set
  AStarOpenSet.splice(AStarOpenSet.indexOf(AStarCurrentCell), 1);
  //Add the Cell to the closed Set
  AStarClosedSet.push(AStarCurrentCell);

  //Color already visited Cells less bright
  for (const c of cells) if (c.parent && !["BFSVisited", "OptimalPath"].includes(c.backGround)) c.backGround = "AStarVisited";

  //Highlight the current Cell
  AStarCurrentCell.backGround = "highlight";

  //Find all reachable Neighbors of AStarCurrentCell
  AStarCurrentCell.mazeSolverCollectNeighbors();

  for (const neighbor of AStarCurrentCell.neighbors) {

    if (neighbor.end) {
      AStarFinished = true;
      neighbor.parent = AStarCurrentCell;
      break;
    }

    //Skip explored Cells
    if (AStarClosedSet.includes(neighbor)) continue;

    if (AStarCurrentCell.f < neighbor.f || !AStarOpenSet.includes(neighbor)) {

      //Calculate the Neighbor's Costs
      calculateAStarCosts(neighbor);
      //Set Parent-Node
      neighbor.parent = AStarCurrentCell;
      //Push Neighbor to the AStarOpenSet
      if (!AStarOpenSet.includes(neighbor)) AStarOpenSet.push(neighbor);

    }
  }
}

//Calculate the the Cell's G, H and F Costs
function calculateAStarCosts(cell) {

  //Set G-Cost (Distance from Start-Node) of Cell
  cell.g = Math.floor(dist(cell.x, cell.y, AStarCurrentCell.x, AStarCurrentCell.y))
  //Set H-Cost (Distance to End-Node) of Cell
  cell.h = Math.floor(dist(cell.x, cell.y, cells.at(-1).x, cells.at(-1).y))
  //Set F-Cost (sum of G-Cost + F-Cost) of Cell
  cell.f = cell.g + cell.h;
}



//Reset the A*-Algorithm to it's default Values
function resetAStar() {

  //Reset the Open Set
  AStarOpenSet = [];
  //Reset theClosed Set
  AStarClosedSet = [];

  //Reset the current Cell
  AStarCurrentCell = cells[0];

  //Reset the Finish-Flag
  AStarFinished = false;
  //Reset the Path-Drawn-Flag
  optimalPathDrawn = false;
}