import names from './names'

let id = 1

function getName() {
  const keys = Object.keys(names)
  return keys[Math.floor(Math.random() * keys.length)]
}

function getRandom(max) {
  return Math.ceil(Math.random() * max)
}

function getColour(){
  return Math.floor(Math.random()*16777215).toString(16);
}

export default function createKiwi() {
  return {
    id: id++,
    name: `${getName()} ${getName()}`,
    size: getRandom(10),
    strength: getRandom(10),
    cuteness: getRandom(10),
    speed: getRandom(10),
    colour: `#${getColour()}`,
    pursuers: getRandom(10) - 1
  }
}
