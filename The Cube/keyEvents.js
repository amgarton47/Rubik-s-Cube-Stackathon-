function keyPressed() {
  switch (keyCode) {
    case DOWN_ARROW:
      x -= 0.4;
      break;
    case UP_ARROW:
      x += 0.4;
      break;
    case LEFT_ARROW:
      y -= 0.4;
      break;
    case RIGHT_ARROW:
      y += 0.4;
      break;
  }

  switch (key) {
    // F and B
    case "f":
      currentMove = MOVES.FRONTP;
      currentMove.start();
      break;
    case "F":
      currentMove = MOVES.FRONT;
      currentMove.start();
      break;
    case "b":
      currentMove = MOVES.BACKP;
      currentMove.start();
      break;
    case "B":
      currentMove = MOVES.BACK;
      currentMove.start();
      break;

    // U and D
    case "u":
      currentMove = MOVES.UPP;
      currentMove.start();
      break;
    case "U":
      currentMove = MOVES.UP;
      currentMove.start();
      break;
    case "d":
      currentMove = MOVES.DOWNP;
      currentMove.start();
      break;
    case "D":
      currentMove = MOVES.DOWN;
      currentMove.start();
      break;

    // R and L
    case "r":
      currentMove = MOVES.RIGHTP;
      currentMove.start();
      break;
    case "R":
      currentMove = MOVES.RIGHT;
      currentMove.start();
      break;
    case "l":
      currentMove = MOVES.LEFTP;
      currentMove.start();
      break;
    case "L":
      currentMove = MOVES.LEFT;
      currentMove.start();
      break;

    // Middle layer slices
    case "s":
      turnZ(0, false);
      break;
    case "S":
      turnZ(0, true);
      break;
    case "E":
      turnY(0, false);
      break;
    case "e":
      turnY(0, true);
      break;
    case "M":
      turnX(0, false);
      break;
    case "m":
      turnX(0, true);
      break;
    case " ":
      scramble();
  }
}
