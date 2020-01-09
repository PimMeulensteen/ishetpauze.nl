function isPauze () {
  const d = new Date()
  const t = d.getMinutes()

  if (t < 45) {
    elem.innerText = `Nee, nog ${45 - t} minuten`
  } else {
    elem.innerText = 'Ja, het is pauze!'
  }
}
const elem = document.getElementById('result')
setInterval(isPauze, 1000)
