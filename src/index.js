knightMoves = function (start, end) {
  if (!Array.isArray(start) || !Array.isArray(end)) {
    return console.log("Enter proper start and end points.");
  }
  if (start.length !== 2 || end.length !== 2) {
    return console.log("Enter proper start and end points.");
  }
  for (let x = 0; x < start.length; x++) {
    if (start[x] < 0 || start[x] > 7) {
      return console.log("Enter valid start point.");
    }
    if (end[x] < 0 || end[x] > 7) {
      return console.log("Enter valid end point.");
    }
  }
  let legalmoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  let path = [];
  let current = start;
  let solution = [];
  moves(current, legalmoves, path, end, solution);

  // for (let x = 0; x < solution.length - 1; x++) {
  //   if (solution[solution.length - 1].length < solution[x].length) {
  //     solution.splice(x, 1);
  //     x--;
  //   }
  // }

  if (solution.length > 1) {
    console.log(
      `You made it in ${solution[0].length - 1} moves! Here are all ${
        solution.length
      } of your potential paths:`
    );
  } else if (solution[0].length === 2) {
    console.log(
      `You made it in ${
        solution[0].length - 1
      } move! Here is the quickest way although you should be able to find this path without help:`
    );
  } else {
    console.log(
      `You made it in ${
        solution[0].length - 1
      } moves! Here is your best solution out of all your potential path:`
    );
  }

  for (let x = 0; x < solution.length; x++) {
    console.log(JSON.stringify(solution[x]));
  }
};

moves = function (current, legalmoves, path, end, solution) {
  if (checkpath(path, current)) {
    path.push(current);
    return;
  }

  path.push(current);

  if (path.length >= 7) {
    return;
  }

  for (let x = 0; x < solution.length; x++) {
    if (path.length >= solution[x].length) {
      return;
    }
  }

  for (let y = 0; y < legalmoves.length; y++) {
    if (
      current[0] + legalmoves[y][0] === end[0] &&
      current[1] + legalmoves[y][1] === end[1]
    ) {
      current = [current[0] + legalmoves[y][0], current[1] + legalmoves[y][1]];
      path.push(current);
      let tmp = path.slice();
      if (solution.length > 0 && tmp.length < solution[0].length) {
        // solution = [];
        solution.length = 0;
      }
      solution.push(tmp);
      // console.log(solution);
      path.pop();
      return solution;
    }
  }

  if (checkpath(path, end)) {
    return;
  }

  for (let x = 0; x < legalmoves.length; x++) {
    if (
      current[0] + legalmoves[x][0] < 8 &&
      current[0] + legalmoves[x][0] > -1 &&
      current[1] + legalmoves[x][1] < 8 &&
      current[1] + legalmoves[x][1] > -1
    ) {
      {
        moves(
          [current[0] + legalmoves[x][0], current[1] + legalmoves[x][1]],
          legalmoves,
          path,
          end,
          solution
        );
        path.pop();
      }
    }
  }
  return solution;
};

checkpath = function (path, array) {
  for (let x = 0; x < path.length; x++) {
    if (path[x][0] === array[0] && path[x][1] === array[1]) {
      return true;
    }
  }
  return false;
};

knightMoves([0, 0], [3, 2]);
