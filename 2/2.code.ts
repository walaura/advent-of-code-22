import fs from "fs";

const file = fs.readFileSync("./data.txt", "utf8");
const rows = file.split("\n");

const MOVE_BEAT_BY = {
  ROCK: "PAPER",
  PAPER: "SCISSORS",
  SCISSORS: "ROCK",
};
const MOVE_BEATS = {
  PAPER: "ROCK",
  SCISSORS: "PAPER",
  ROCK: "SCISSORS",
};
const SCORES = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};
const THEIR_MOVE = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
};
const MY_MOVE = {
  X: "LOSE",
  Y: "DRAW",
  Z: "WIN",
};

const moves = rows.map((r) => {
  const split = r.split(" ");
  return [THEIR_MOVE[split[0]], MY_MOVE[split[1]]];
});

let score = 0;
for (let [theirMove, myMove] of moves) {
  let myMoveMove;
  if (myMove === "LOSE") {
    myMoveMove = MOVE_BEATS[theirMove];
  } else if (myMove === "DRAW") {
    score += 3;
    myMoveMove = theirMove;
  } else if (myMove === "WIN") {
    score += 6;
    myMoveMove = MOVE_BEAT_BY[theirMove];
  }
  score += SCORES[myMoveMove];
  console.log(theirMove, myMove, myMoveMove, score);
}
