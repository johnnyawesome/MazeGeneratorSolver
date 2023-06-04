# Adjustable, Interactive Maze Generator & Solver

Generates a maze & solves it using one of three different algorithms. Written in P5JS.

![MazeGeneratorSolver](https://raw.githubusercontent.com/johnnyawesome/MazeGeneratorSolver/main/MazeGeneratorSolver/DemoImages/MazeGeneratorSolver.gif)

### Functions

- The interactive Maze-Generator generates random mazes of various size. You can adjust the difficulty of the maze via a slider.
- You can choose one (or more) algorithms to solve the generated maze.
- You can also set the speed, at which the Solving-Algorithm works

## MazeGenerator

This Maze-Generator uses [Depth-First-Search](https://en.wikipedia.org/wiki/Depth-first_search) and [recursive](https://en.wikipedia.org/wiki/Recursion_(computer_science)) backtracking to generate a Maze.
You can find the entire Algorithm [here on Wikipedia](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Randomized_depth-first_search).

![MazeGenerator](https://raw.githubusercontent.com/johnnyawesome/MazeGenerator/main/MazeGenerator/DemoImages/MazeGenerator.gif)


### Interactive Maze-Generation

To create a new maze, move or just click the slider at the bottom, and a new, random Maze will be created.

- The slider lets you customize the cell-size (the size of one individual cell), resulting in simpler or more complex mazes.
- Based on the cell-size, the walls of the labyrinth get drawn thicker or thinner

![MazeGenerator](https://raw.githubusercontent.com/johnnyawesome/MazeGenerator/main/MazeGenerator/DemoImages/MazeGenerator.gif)

## Maze Solver

You can solve the maze by clicking one of the maze-solver buttons.

There are multiple algorithms available:

![MazeGeneratorSolver](https://raw.githubusercontent.com/johnnyawesome/MazeGeneratorSolver/main/MazeGeneratorSolver/DemoImages/MazeGeneratorSolver.gif)

### Multiple Algorithms

You can choose between 3 different pathfinding-algorithms to solve the maze:

- [👋🏻Right hand on the Wall👋🏻](https://en.wikipedia.org/wiki/Maze-solving_algorithm#Wall_follower)
- [🌬️Breadth First Search🌬️](https://en.wikipedia.org/wiki/Breadth-first_search)
- [⭐A* / A-Star⭐](https://en.wikipedia.org/wiki/A*_search_algorithm)


### Differences between the Pathfinding-Algorithms

All these Algorithms have their own Advantages and disadvantages.

[👋🏻Right hand on the Wall👋🏻](https://en.wikipedia.org/wiki/Maze-solving_algorithm#Wall_follower):

- Is not guaranteed to find the fastest path from start to finish
- Is easy to implement

[🌬️Breadth First Search🌬️](https://en.wikipedia.org/wiki/Breadth-first_search):

- Is guaranteed to find the fastest path from start to finish
- Can be inefficient

[⭐A* / A-Star⭐](https://en.wikipedia.org/wiki/A*_search_algorithm):

- Is guaranteed to find the fastest path from start to finish
- Can be very efficient
- A* /A-Star is basically an extension of [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm). It uses [heuristics](https://en.wikipedia.org/wiki/Heuristic_(computer_science)) to guide it's search

### The Optomal Path

[🌬️Breadth First Search🌬️](https://en.wikipedia.org/wiki/Breadth-first_search) and [⭐A* / A-Star⭐](https://en.wikipedia.org/wiki/A*_search_algorithm) are guaranteed to find the optimal path through the maze.

Once the optimal path is found, it will be highlighted (in yellow).

### Adjustable Solving-Speed

There's a slider that lets you adjust the solving-speed.

Interactively slow down or speed up the solving-algorithm.

### Overlaying Paths

You can solve the same maze using all 3 available pathfing-algorithms.

Each algorithm leaves a differently colored trail.

By the end, you can visually compare the efficiency of the algorithms for a given maze.

The faster an algorithm finds the end of the maze, the better it perfomed.

In other words: The less exploring an algorithm had to do to find the end, the better.
