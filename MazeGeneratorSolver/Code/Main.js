/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

//Initial Size of an individual Cell
let cellSize = 50;

//Holds all Cells of the Maze
let cells = [];

//Maze Algorithm
let mazeAlgorithm = "";

function setup() {
  angleMode(DEGREES);
  createCanvas(700, 750, P2D);
  background(0);
  stroke(0, 255, 0);
  noFill();
  strokeWeight(5);

  // ##### Initial Maze #####

  //Generate all Cells
  generateCells();

  //Generate the Maze
  generateMaze(cells[0]);

  //UI
  createUiElements();
}

function draw() {

  //Adaptable Framerate = Adaptable Maze-Solving Speed
  frameRate(frameRateSlider.value());

  //Perform different Maze-Solving Algorithms
  if (mazeAlgorithm === "Right Hand on Wall") {
    rightHandOnWall(LHoWNextCell);
  } else if (mazeAlgorithm === "Breadth First Search") {
    breadthFirstSearch(BFSCurrentCell);
  } else if (mazeAlgorithm === "A-Star") {
    AStar();
  }

  //Display all Cells
  for (const cell of cells) cell.display();

}



