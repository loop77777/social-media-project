const ADJACTIVES = [
  "overrated",
  "mushy",
  "stupid",
  "classy",
  "obedient",
  "glamorous",
  "toothsome",
  "curious",
  "teeny-tiny",
];

const OBJECTS = [
  "Shoes",
  "Stockings",
  "Sweater",
  "Scarf",
  "Wagon",
  "Thermometer",
  "Bones",
  "Mop",
  "Flower-pot",
];

function genRandomUsername() {
  const adj = ADJACTIVES[Math.floor(Math.random() * 9)];
  const obj = OBJECTS[Math.floor(Math.random() * 9)];
  return `${adj}-${obj}`;
}

module.exports = {
  genRandomUsername,
};
