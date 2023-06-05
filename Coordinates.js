/* 
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

Example 1:



Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:



Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.



*/
//

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  coordinates = coordinates.sort((a, b) => a - b);

  let x_slope_Original = coordinates[0][0] - coordinates[1][0];

  let y_slope_Original = coordinates[0][1] - coordinates[1][1];

  if (
    x_slope_Original === 0 ||
    x_slope_Original == Infinity ||
    x_slope_Original == -Infinity ||
    x_slope_Original == NaN
  ) {
    x_slope_Original = coordinates[1][0] - coordinates[0][0];
  }

  if (
    y_slope_Original == 0 ||
    y_slope_Original == Infinity ||
    y_slope_Original == -Infinity ||
    y_slope_Original == NaN
  ) {
    y_slope_Original = coordinates[1][1] - coordinates[0][1];
  }
  console.log(y_slope_Original, coordinates[1][1] - coordinates[0][1]);

  let slope_Original = x_slope_Original / y_slope_Original;

  if (slope_Original == -Infinity) {
    slope_Original = Math.abs(slope_Original);
  }

  console.log("Slope Original", slope_Original);
  for (let i = 0; i <= coordinates.length - 2; i++) {
    let x_side = coordinates[i + 1][0] - coordinates[i][0];
    let y_side = coordinates[i + 1][1] - coordinates[i][1];

    if (
      x_side === 0 ||
      x_side == Infinity ||
      x_side == -Infinity ||
      x_side == NaN
    ) {
      x_side = coordinates[i][0] - coordinates[i + 1][0];
    }

    if (
      y_side === 0 ||
      y_side == Infinity ||
      y_side == -Infinity ||
      y_side == NaN
    ) {
      y_side = coordinates[i][1] - coordinates[i + 1][1];
    }

    let slope = x_side / y_side;

    if (slope == -Infinity) {
      slope = Infinity;
    }

    console.log("Slope", slope);
    if (slope !== slope_Original) {
      return false;
    }
  }

  return true;
};
//~```````````````````````````` =================================

var checkStraightLine1 = function (coordinates) {
  const findDiff = (c1, c2) => {
    if (coordinates[0][0] - coordinates[1][0] === 0)
      return (c2[0] - c1[0]) / (c2[1] - c1[1]);
    else return (c2[1] - c1[1]) / (c2[0] - c1[0]);
  };
  const diff = findDiff(coordinates[0], coordinates[1]);
  for (let i = 0; i < coordinates.length - 1; i++) {
    if (diff !== findDiff(coordinates[i], coordinates[i + 1])) return false;
  }
  return true;
};
