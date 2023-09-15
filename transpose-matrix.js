// ====================================================================================================
// transpose-matrix.js
// ====================================================================================================

// You're given a 2D array of integers matrix. Write a function
// that returns the transpose of the matrix.
// The transpose of a matrix is a flipped version of the original matrix across
// its main diagonal (which runs from top-left to bottom-right); it switches
// the row and column indices of the original matrix.
// You can assume the input matrix always has at least 1 value; however its
// width and height are not necessarily the same.

// ====================================================================================================
// First Solution
// O(n*m) time | O(n*m) space
// ====================================================================================================
function transposeMatrix(matrix) {
  // Write your code here.
  let flippedMatrix = [];
  for (i in matrix) {
    for (j in matrix[i]) {
      if (!flippedMatrix[j]) flippedMatrix[j] = [];
      if (!flippedMatrix[j][i]) flippedMatrix[j][i] = [];
      flippedMatrix[j][i] = matrix[i][j];
    }
  }
  return flippedMatrix;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;

// ====================================================================================================
// Second Solution
// O(n) time | O(k) space
// ====================================================================================================
const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  const scores = {};
  let winner = "";
  let maxScore = 0;

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const winningTeam = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam;

    scores[winningTeam] = (scores[winningTeam] || 0) + 3;

    if (scores[winningTeam] > maxScore) {
      maxScore = scores[winningTeam];
      winner = winningTeam;
    }
  }

  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

// ====================================================================================================
// Second Solution
// O(n*m) time | O(n*m) space
// ====================================================================================================
function transposeMatrix(matrix) {
  // Write your code here.
  let flippedMatrix = [];
  for (i in matrix[0]) {
    let newRow = [];
    for (j in matrix) {
      newRow.push(matrix[j][i]);
    }
    flippedMatrix.push(newRow);
  }
  return flippedMatrix;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;
