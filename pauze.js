function isPauze() {
    const d = new Date()
    var ts = Math.round((new Date()).getTime() / 1000);
    const t = d.getMinutes()
    const day = d.getDay()

    if (day >= 6) {
        elem.innerText = "Ja, het is weekend!"
        confetti.start()
    } else if (t < 45) {
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

    // kerstvakantie
    if (ts >= 164038680 && ts <= 1610233199) {
        elem.innerText = 'Ja, het is kerstvakantie!'
        confetti.start();
    }

    // meivakantie
    if (ts >= 1651269601 && ts <= 1652047199) {
        elem.innerText = 'Ja, het is meivakantie!'
        confetti.start();
    }

    //zomervakantie 4 juli - 4 sep
    if (ts >= 1656885601 && ts <= 1662328799) {
        elem.innerText = 'Ja, het is zomervakantie!'
        confetti.start();
    }
}
let conf_playing = false;
const elem = document.getElementById('result')
isPauze()
setInterval(isPauze, 1000)
