class Game {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.winner = null;
  }

  placeX(i, j) {
    this.board[i][j] = 'X';
    this.checkWinner(i, j);
  }

  placeO(i, j) {
    this.board[i][j] = 'O';
    this.checkWinner(i, j);
  }

  checkWinner(i, j) {
    if (checkRow(i,j) || checkColumn(i, j) || checkDiagonal(i, j)) {
      this.winner === this.board[i][j];
    }
  }

  checkRow(i, j) {
    const player = this.board[i][j];
    for (let y = 0; y < 3; y++) {
      if (this.board[i][y] !== player) {
        return false;
      }
    }
    return true;
  }

  checkColumn(i, j) {
    const player = this.board[i][j];
    for (let x = 0; x < 3; x++) {
      if (this.board[x][j] !== player) {
        return false;
      }
    }
    return true;
  }

  checkDiagonal(i, j) {
    return checkMajorDiagonal(i, j) && checkMinorDiagonal(i, j);
  }

  checkMajorDiagonal(i, j) {
    const player = this.board[i][j];
    for (let x = 0, y = 0; x < 3; x++, y++) {
      if (this.board[x][y] !== player) {
        return false;
      }
    }
    return true;
  }

  checkMinorDiagonal(i, j) {
    const player = this.board[i][j];
    for (let x = 0, y = 2; x < 3; x++, y--) {
      if (this.board[x][y] !== player) {
        return false;
      }
    }
    return true;
  }
}