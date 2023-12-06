import fs from "fs";

const file = fs.readFileSync("./input.txt", "utf8");

const rows = file.split("\n\n");

const elves = rows.map((r) =>
  r.split("\n").reduce((acc, cur) => acc + Number(cur), 0)
);

const sorted = (elves.sort((a, b) => b-a));
console.log(sorted[0])
console.log(sorted[0]+sorted[1]+sorted[2])