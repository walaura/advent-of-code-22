import fs from "fs";

const file = fs.readFileSync("./data.txt", "utf8");
const rows = file.split("\n");
