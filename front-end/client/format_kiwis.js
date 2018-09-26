export const formatKiwi = kiwi => {
  const newKiwi = {}
  for (let key in kiwi) {
    newKiwi[key] = kiwi[key].value
  }
  delete newKiwi._fqdn
  return newKiwi
}


export default kiwis => Object.keys(kiwis).reduce((arr, id, i, keys) => {
  if (!id.includes('types') && id != "_fqdn") {
    const kiwi = kiwis[id]
    const newKiwi = formatKiwi(kiwi)
    arr.push(newKiwi)
  }
  return arr
}, [])
