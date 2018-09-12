import names from './names'

function getName() {
  return names[Math.floor(Math.random() * names.length)]
}

function getRandom(max) {
  return Math.ceil(Math.random() * max)
}

function getColour(){
  return Math.floor(Math.random()*16777215).toString(16);
}

export default function createKiwi() {
  return {
    name: `${getName()} ${getName()}`,
    size: getRandom(5),
    strength: getRandom(10),
    cuteness: getRandom(10),
    speed: getRandom(10),
    colour: `#${getColour()}`
  }
}