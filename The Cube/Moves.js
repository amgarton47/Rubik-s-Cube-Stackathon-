let currentMove = new Move(0, 1, 0, 1);

const MOVES = {
  DOWN: new Move(0, 1, 0, 1),
  DOWNP: new Move(0, 1, 0, -1),
  UP: new Move(0, -1, 0, -1),
  UPP: new Move(0, -1, 0, 1),
  FRONT: new Move(0, 0, 1, 1),
  FRONTP: new Move(0, 0, 1, -1),
  BACK: new Move(0, 0, -1, -1),
  BACKP: new Move(0, 0, -1, 1),
  RIGHT: new Move(1, 0, 0, 1),
  RIGHTP: new Move(1, 0, 0, -1),
  LEFT: new Move(-1, 0, 0, -1),
  LEFTP: new Move(-1, 0, 0, 1),
};

const MOVES_KEYS = [
  "UP",
  "UPP",
  "DOWN",
  "DOWNP",
  "FRONT",
  "FRONTP",
  "BACK",
  "BACKP",
  "RIGHT",
  "RIGHTP",
  "LEFT",
  "LEFTP",
];

function translator(moveKey) {
  switch (moveKey) {
    case "UP":
      return "U";
    case "UPP":
      return "U'";
    case "DOWN":
      return "D";
    case "DOWNP":
      return "D'";
    case "RIGHT":
      return "R";
    case "RIGHTP":
      return "R'";
    case "LEFT":
      return "L";
    case "LEFTP":
      return "L";
    case "BACK":
      return "B";
    case "BACKP":
      return "B'";
    case "FRONT":
      return "F";
    case "FRONTP":
      return "F'";
  }
}
