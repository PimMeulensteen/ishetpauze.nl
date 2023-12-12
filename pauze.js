function isPauze() {
    const d = new Date()
    const t = d.getMinutes()
    const day = d.getDay()
    const month = d.getMonth();
    const date = d.getDate();

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
    if ((month == 11 && date > 22) || (month == 0 && date <= 7)) {
        elem.innerText = 'Ja, het is kerstvakantie!'
        confetti.start();
    }

    // meivakantie
    if ((month == 3 && date > 27) || (month == 4 && date <= 5)) {
        elem.innerText = 'Ja, het is meivakantie!'
        confetti.start();
    }

    //zomervakantie
    if (((month >= 6 && date > 28) || (month > 6 && month <= 9 ))) {
        elem.innerText = 'Ja, het is zomervakantie!'
        confetti.start();
    }
}
let conf_playing = false;
const elem = document.getElementById('result')
isPauze()
setInterval(isPauze, 1000)
