//Cell-Size-Slider
let cellSizeSlider;
//Animation-Speed-Slider
let frameRateSlider;

//Buttons
let rightHandOnWallButton;
let breadthFirstSearchButton;
let AStarButton;

//Create & Display all UI Elements
function createUiElements() {

  //Display UI Elements
  initCellSizeSlider();
  animationSpeedSlider()
  displayText();
  addButtons();

}

//Display Text
function displayText() {

  //Display all Text in the same Format
  push()
  textSize(20);
  strokeWeight(1);
  fill(0, 255, 0)
  text('Generate a Maze', 20, 700);
  text('Animation-Speed', 200, 700);
  text('Solve Maze', 400, 700);
  pop()

}

// ###############  Cell-Size-Slider ###############
function initCellSizeSlider() {

  //Slider
  cellSizeSlider = createSlider(10, 70, 50, 5);
  cellSizeSlider.position(20, 710);
  cellSizeSlider.style('width', '200');

  //On Mouse-Release, reset the Maze
  cellSizeSlider.mouseReleased(() => {
    resetMaze();
  });
}

// ###############  Animation-Speed Slider ###############
function animationSpeedSlider() {

  // Animation-Speed Slider
  frameRateSlider = createSlider(1, 120, 20, 1);
  frameRateSlider.position(200, 710);
  frameRateSlider.style('width', '200');
}

//Add Buttons
function addButtons() {

  // ####### Right Hand on Wall Button ####### 
  rightHandOnWallButton = createButton('Right Hand on Wall');
  rightHandOnWallButton.position(400, 710);

  //When the Button is clicked...
  rightHandOnWallButton.mouseReleased(() => {

    //...Reset the Maze...
    if (LHoWNextCell !== cells[0]) resetMaze();

    //...and set the Solver-Algo to "Right Hand on Wall"
    mazeAlgorithm = "Right Hand on Wall";

  });


  // ####### Breadth First Search Button #######
  breadthFirstSearchButton = createButton('Breadth First Search');
  breadthFirstSearchButton.position(550, 710);

  //When the Button is clicked...
  breadthFirstSearchButton.mouseReleased(() => {

    //...Reset the Maze...
    if (BFSCurrentCell !== cells[0]) resetMaze();

    //...and set the Solver-Algo to "Breadth First Search"
    mazeAlgorithm = "Breadth First Search";

  });

  // ####### A-Star Button #######
  AStarButton = createButton('A⭐ / A-Star');
  AStarButton.position(550, 680);

  //When the Button is clicked...
  AStarButton.mouseReleased(() => {

    //...Reset the Maze...
    if (AStarCurrentCell !== cells[0]) resetMaze();

    //...and set the Solver-Algo to "A-Star"
    mazeAlgorithm = "A-Star";

  });
}