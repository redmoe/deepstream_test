function randomName() {
  const adjectives = ["angry", "bashful", "creative", "dorky", "efficient"];
  const nouns = ["animal", "bear", "crab", "doughnut", "elephant", "fox"];
  const name = `${pick(adjectives)} ${pick(nouns)}`;
  return name;
}

function randomColorString() {
  const colors = ["FF", "00", "88"];
  return `#${pick(colors)}${pick(colors)}${pick(colors)}`;
}

function isEmpty(o) {
  return Object.keys(o).length === 0;
}

function pick(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function roundTo(n, b) {
  return Math.round(n / b) * b;
}
