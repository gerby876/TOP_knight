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
  console.log(start, end);
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

  for (let x = 0; x < solution.length - 1; x++) {
    if (solution[x][0].length < solution[x + 1][0].length) {
      solution.splice(x + 1, 1);
      x--;
    } else if (solution[x][0].length > solution[x + 1][0].length) {
      solution.splice(x, 1);
      x--;
    }
  }
  for (let x = 0; x < solution.length - 1; x++) {
    if (solution[x][0].length > solution[solution.length - 1][0].length) {
      console.log("test");
      solution.splice(x, 1);
      x--;
    }
  }

  if (solution.length > 1) {
    console.log(
      `You made it in ${solution[0][0].length - 1} moves! Here are all ${
        solution.length
      } of your potential paths:`
    );
  } else if (solution[0][0].length === 2) {
    console.log(
      `You made it in ${
        solution[0][0].length - 1
      } move! Here is the quickest way although you should be able to find this path without help:`
    );
  } else {
    console.log(
      `You made it in ${
        solution[0][0].length - 1
      } moves! Here is your best solution out of all your potential path:`
    );
  }

  for (let x = 0; x < solution.length; x++) {
    console.log(JSON.stringify(solution[x][0]));
  }
};

moves = function (current, legalmoves, path, end, solution) {
  if (checkpath(path, current)) {
    path.push(current);
    return;
  }
  if (path.length > 7) {
    path.push(current);
    return;
  }
  for (let x = 0; x < solution.length; x++) {
    if (path.length > solution[x][0].length) {
      path.push(current);
      return;
    }
  }
  path.push(current);
  for (let y = 0; y < legalmoves.length; y++) {
    if (
      current[0] + legalmoves[y][0] === end[0] &&
      current[1] + legalmoves[y][1] === end[1]
    ) {
      current = [current[0] + legalmoves[y][0], current[1] + legalmoves[y][1]];
      path.push(current);
      let tmp = path.slice();
      solution.push([tmp]);
      path.pop();
      return solution;
    }
  }
  if (checkpath(path, end)) {
    return;
  }
  if (
    -1 < current[0] + legalmoves[0][0] &&
    -1 < current[1] + legalmoves[0][1] &&
    current[0] + legalmoves[0][0] < 8 &&
    current[1] + legalmoves[0][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[0][0], current[1] + legalmoves[0][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  if (
    -1 < current[0] + legalmoves[1][0] &&
    -1 < current[1] + legalmoves[1][1] &&
    current[0] + legalmoves[1][0] < 8 &&
    current[1] + legalmoves[1][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[1][0], current[1] + legalmoves[1][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  if (
    -1 < current[0] + legalmoves[2][0] &&
    -1 < current[1] + legalmoves[2][1] &&
    current[0] + legalmoves[2][0] < 8 &&
    current[1] + legalmoves[2][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[2][0], current[1] + legalmoves[2][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  if (
    -1 < current[0] + legalmoves[3][0] &&
    -1 < current[1] + legalmoves[3][1] &&
    current[0] + legalmoves[3][0] < 8 &&
    current[1] + legalmoves[3][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[3][0], current[1] + legalmoves[3][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  if (
    -1 < current[0] + legalmoves[4][0] &&
    -1 < current[1] + legalmoves[4][1] &&
    current[0] + legalmoves[4][0] < 8 &&
    current[1] + legalmoves[4][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[4][0], current[1] + legalmoves[4][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  if (
    -1 < current[0] + legalmoves[5][0] &&
    -1 < current[1] + legalmoves[5][1] &&
    current[0] + legalmoves[5][0] < 8 &&
    current[1] + legalmoves[5][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[5][0], current[1] + legalmoves[5][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  if (
    -1 < current[0] + legalmoves[6][0] &&
    -1 < current[1] + legalmoves[6][1] &&
    current[0] + legalmoves[6][0] < 8 &&
    current[1] + legalmoves[6][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[6][0], current[1] + legalmoves[6][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  if (
    -1 < current[0] + legalmoves[7][0] &&
    -1 < current[1] + legalmoves[7][1] &&
    current[0] + legalmoves[7][0] < 8 &&
    current[1] + legalmoves[7][1] < 8
  ) {
    moves(
      [current[0] + legalmoves[7][0], current[1] + legalmoves[7][1]],
      legalmoves,
      path,
      end,
      solution
    );
    path.pop();
  }
  return solution;

  // if (
  //   current[0] + legalmoves[x][0] < 8 &&
  //   current[0] + legalmoves[x][0] > -1 &&
  //   current[1] + legalmoves[x][1] < 8 &&
  //   current[1] + legalmoves[x][1] > -1
  // ) {
  //   if (
  //     !checkpath(path, [
  //       current[0] + legalmoves[x][0],
  //       current[1] + legalmoves[x][1],
  //     ])
  //   ) {
  //     current = [current[0] + legalmoves[x][0], current[1] + legalmoves[x][1]];
  //     path.push(current);
  //     moves(current, legalmoves, path, end, solution);
  //     return;
  //   }
  // }
};

checkpath = function (path, array) {
  for (let x = 0; x < path.length; x++) {
    if (path[x][0] === array[0] && path[x][1] === array[1]) {
      return true;
    }
  }
  return false;
};

knightMoves([0, 0], [1, 2]);
