//Variables for rightHandOnWall()
let LHoWDirection = 0;
let LHoWNextCell = cells[0];

//The "Right Hand on the Wall"-Algorithm
function rightHandOnWall(cell = cells[0]) {

  //If we're at the end of the Maze, return
  if (cell.end) return;

  //Color already visited Cells less bright
  for (const c of cells) if (["RHoWVisited", "highlight"].includes(c.backGround)) c.backGround = "RHoWVisited"
  //Highlight the currently visited Cell 
  cell.backGround = "highlight";


  // ########### Change LHoWDirection ########### 

  //Go right
  if (!cell.walls[(LHoWDirection + 1) % 4]) {
    LHoWDirection += 1;

    //Backtrack
  } else if (cell.walls[(LHoWDirection + 3) % 4]
    && cell.walls[LHoWDirection % 4]
    && cell.walls[(LHoWDirection + 1) % 4]) {
    LHoWDirection += 2
    //console.log("3 side hit")

    //Go Left
  } else if (cell.walls[LHoWDirection % 4]
    && cell.walls[(LHoWDirection + 1) % 4]) {
    LHoWDirection += 3
    //console.log("2 side hit")

    //Go right
  } else if (cell.walls[LHoWDirection % 4]) {
    LHoWDirection += 1
    //console.log("1 side hit")
  }

  //The X and Y value of the next Cell
  let LHoWNextCellCoord = { x: cell.x, y: cell.y };

  //Next Cell Up
  if (LHoWDirection % 4 === 0) LHoWNextCellCoord.y = cell.y - cell.size;
  //Next Cell Right
  if (LHoWDirection % 4 === 1) LHoWNextCellCoord.x = cell.x + cell.size;
  //Next Cell Down
  if (LHoWDirection % 4 === 2) LHoWNextCellCoord.y = cell.y + cell.size;
  //Next Cell Left
  if (LHoWDirection % 4 === 3) LHoWNextCellCoord.x = cell.x - cell.size;


  LHoWNextCell = cells.find(c => c.x === LHoWNextCellCoord.x && c.y === LHoWNextCellCoord.y);

  //Display the Agent's current LHoWDirection on the rightHandOnWallButton
  rightHandOnWallButton.html("Right Hand on Wall" + ["⬆️", "➡️", "⬇️", "⬅️"][LHoWDirection % 4])

  //Debugging
  console.log(["Up", "Right", "Down", "Left"][LHoWDirection % 4])
  //console.log(LHoWDirection % 4)
  //console.log(LHoWNextCell);
}

//Reset the Right Hand on the Wall Algorithm to it's default Values
function resetRightHandOnWall() {
  //Reset starting Cell
  LHoWNextCell = cells[0];
}