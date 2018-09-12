import React from 'react'


export default function ({kiwi, isFlipped}) {
  const {
    colour,
    size,
    strength,
    cuteness,
    speed,
    pursuers
  } = kiwi
  const cellClass = 'td has-text-dark has-text-centered'

  const renderRow = (name, value) => {
    const label = <td className={cellClass}><b>{name}</b></td>
    const val = <td className={cellClass}>{value}</td>
    return <tr>
      {isFlipped ? val : label}
      {isFlipped ? label : val}
    </tr>
  }

  return <table className="table is-large is-fullwidth has-text-centered">
    <thead>
      <tr>
        <th className={cellClass}>{!isFlipped ? 'Trait' : 'Value'}</th>
        <th className={cellClass}>{isFlipped ? 'Trait' : 'Value'}</th>
      </tr>
    </thead>
    <tbody>
      {renderRow('Colour', colour)}
      {renderRow('Size', size)}
      {renderRow('Strength', strength)}
      {renderRow('Speed', speed)}
      {renderRow('Cuteness', cuteness)}
      {renderRow('Pursued By:', `${pursuers} kiwis`)}
    </tbody>
  </table>
}
