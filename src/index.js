console.log("hi");

knightMoves = function (start, end) {
  if (!Array.isArray(start) || !Array.isArray(end)) {
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
};

knightMoves([0, 7], [0, 7]);
