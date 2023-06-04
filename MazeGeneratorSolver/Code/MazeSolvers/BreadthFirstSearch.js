// The Breadth First Search Algorithm, implemented according to https://en.wikipedia.org/wiki/Breadth-first_search

//The currently searched Cell for breadthFirstSearch()
let BFSCurrentCell = null;

//Queues for BFS
let BFSExplored = new Set();
let BFSQueue = [];

//Flag is true when the Maze has been solved
let BFSFinished = false;

//The Breadth First Search Algorithm
function breadthFirstSearch(cell = cells[0]) {

  //If we solved the Maze...
  if (BFSFinished) {
    //...draw the optimal Path from Start to Finish...
    if (optimalPathDrawn !== mazeAlgorithm) drawOptimalPath(cells.find(c => c.end), mazeAlgorithm);
    //...and stop processing
    return;
  }

  //If the Maze is solved, return
  if (BFSFinished) return;

  //Add the current Cell to the end of the Queues
  if (!BFSExplored.has(cell)) BFSQueue.push(cell);
  BFSExplored.add(cell);

  //If the Queue is empty, return
  if (!BFSQueue.length) return;

  //Color already visited Cells less bright
  for (const c of cells) if (c.parent && !["AStarVisited", "OptimalPath"].includes(c.backGround)) c.backGround = "BFSVisited";

  //The next Cell to explore
  BFSCurrentCell = BFSQueue.shift();

  //Find all reachable Neighbors of BFSCurrentCell
  BFSCurrentCell.mazeSolverCollectNeighbors();

  //Perform the Breadth-First Search on all neighboring Cells of BFSCurrentCell
  for (const neighborCell of BFSCurrentCell.neighbors) {

    //If the neighborCell Cell has not been explored...
    if (!BFSExplored.has(neighborCell)) {
      //...mark it as explored...
      BFSExplored.add(neighborCell);
      //...and add it to the Queue...
      BFSQueue.push(neighborCell);
      //...and set it's Parent to BFSCurrentCell
      neighborCell.parent = BFSCurrentCell;
      //Highlight the queued Cell 
      neighborCell.backGround = "highlight";
      //If we're at the end of the Maze, return
      if (neighborCell.end) BFSFinished = true;
    }
  }
}

//Reset the Breadth First Search Algorithm to it's default Values
function resetBreadthFirstSearch() {

  //Reset starting Cell
  BFSCurrentCell = cells[0];

  //Empty the Queues
  BFSExplored = new Set();
  BFSQueue = [];

  //Reset the Finish-Flag
  BFSFinished = false;
  //Reset the Path-Drawn-Flag
  optimalPathDrawn = false;
}