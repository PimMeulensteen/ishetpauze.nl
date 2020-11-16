function isPauze() {
    const d = new Date()
    const t = d.getMinutes()

    if (t < 45) {
        if (t == 44) {
            elem.innerText = `Nee, nog 1 minuut`
        } else {
            elem.innerText = `Nee, nog ${45 - t} minuten`
        }
        confetti.stop();
    } else {
        elem.innerText = 'Ja, het is pauze!'
        confetti.start();
    }
}
let conf_playing = false;
const elem = document.getElementById('result')
isPauze()
setInterval(isPauze, 1000)
