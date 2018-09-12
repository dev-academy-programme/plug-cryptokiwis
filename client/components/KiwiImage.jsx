import React from 'react'

export default function KiwiImage({colour, size}) {
  const imgSize = 100 + (20 * size)
  return <i className="fas fa-kiwi-bird" style={{color: colour, fontSize: `${imgSize}px`}}></i>
}