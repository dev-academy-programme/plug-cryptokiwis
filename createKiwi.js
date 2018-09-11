const kiwiOne = {
  size: 3,
  cuteness: 5,
  strength: 4,
  speed: 6,
  colour: '#ffffff'
}

const kiwiTwo = {
  size: 2,
  cuteness: 8,
  strength: 3,
  speed: 5,
  colour: '#000000'
}

function avgcolor(color1,color2){
  const avg = (a,b) => (a+b)/2
  const t16 = c => parseInt((''+c).replace('#',''),16)
  const hex = c => {
    var t = (c>>0).toString(16)
    return t.length == 2 ? t : '0' + t
  }
  const hex1 = t16(color1)
  const hex2 = t16(color2)
  const r = hex => hex >> 16 & 0xFF
  const g = hex => hex >> 8 & 0xFF
  const b = hex => hex & 0xFF
  res = '#' + hex(avg(r(hex1),r(hex2)))
            + hex(avg(g(hex1),g(hex2)))
            + hex(avg(b(hex1),b(hex2)))
  return res
}

function calcStat(one, two, stat) {
  if (stat == 'colour') return avgcolor(one[stat], two[stat])
  const max = stat == 'size' ? 5 : 10
  const variance = Math.ceil(Math.random() * max)
  const vOne = (variance + one[stat]) / 2
  const vTwo = (variance + two[stat]) / 2
  return [vOne, vTwo][Math.floor(Math.random() * 2)]
}

function createKiwi (one, two) {
  const newKiwi = {}
  for (let key in one) {
    newKiwi[key] = calcStat(one, two, key)
  }
  return newKiwi
}

const newKiwi = createKiwi(kiwiOne, kiwiTwo)
console.log({kiwiOne, kiwiTwo});
console.log({newKiwi});
