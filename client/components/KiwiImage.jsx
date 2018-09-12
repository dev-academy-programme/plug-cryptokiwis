import React from 'react'

import ninjaKiwi from '../ninja-kiwi.svg'

export default function KiwiImage({kiwi}) {
  const {colour, size, wins, losses} = kiwi
  const isNinja = wins + losses >= 10 && wins / (wins + losses) >= 0.7
  const imgSize = 50 + (15 * size)
  const style = {fill: colour, color: colour, fontSize: `${imgSize}px`}
  if (isNinja) return <img src={ninjaKiwi} style={{backgroundColor: colour, height: `${imgSize}px`}} />
  return <i className="fas fa-kiwi-bird" style={style}></i>
}
