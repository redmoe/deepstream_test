const { map } = require("core-js/fn/array");

let myShared;

function preload() {
  partyConnect(
    "wss://deepstream-server-1.herokuapp.com",
    "empty_example",
    "main"
  );
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  map();
}

function map() {
  for (let x = 0; x < mapWidth; x++) {
    for (let y = 0; y < mapHeight; y++) {
      Image(spriteSheet, x * scale, y * scale);
    }
  }
}
