import fs from "fs";

const file = fs.readFileSync("./data.txt", "utf8");
const rows = file.split("\n");

const MOVE_BEAT_BY = {
  ROCK: "PAPER",
  PAPER: "SCISSORS",
  SCISSORS: "ROCK",
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
  X: "ROCK",
  Y: "PAPER",
  Z: "SCISSORS",
};

const moves = rows.map((r) => {
  const split = r.split(" ");
  return [THEIR_MOVE[split[0]], MY_MOVE[split[1]]];
});

let score = 0;
for (let [theirMove, myMove] of moves) {
  score += SCORES[myMove];
  if (myMove === theirMove) {
    score += 3;
  } else if (MOVE_BEAT_BY[theirMove] === myMove) {
    score += 6;
  }
}
console.log(score);