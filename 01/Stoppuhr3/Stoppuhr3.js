datum = new Date();
tag = datum.getDate();
monat = datum.getMonth() + 1;
jahr = datum.getFullYear();
stunden = datum.getHours();
minuten = datum.getMinutes();
sekunden = datum.getSeconds();

document.getElementById("Datum").innerHTML = tag + "." + monat + "." + jahr + " " + stunden + ":" + minuten
    + " " + sekunden;

function refresh() {
    location.reload();
}

const anzeige = document.getElementById("gestoppteZeit");

let gestoppteZeit = 0;
let pausiert = true;
let letzterDurchlauf = new Date();

function start() {
    pausiert = false;
}

function end() {
    pausiert = true;
    alert("Stoppuhr angehalten!")
}

function reset() {
    pausiert = true;
    gestoppteZeit = 0;
    aktualisiereAnzeige();
}

function aktualisiereZeit() {
    if(pausiert === false) {
        gestoppteZeit += new Date() - letzterDurchlauf;
        aktualisiereAnzeige();
    }

    letzterDurchlauf = new Date();
    setTimeout(aktualisiereZeit, 1);
}

function aktualisiereAnzeige() {
    let millisekunden = gestoppteZeit % 1000;
    let sekunden = Math.floor(gestoppteZeit / 1000) % 60;
    let minuten = Math.floor(gestoppteZeit / 60000) % 60;
    let stunden = Math.floor(gestoppteZeit / 3600000);

    stunden = stunden < 10 ? "0" + stunden : stunden;
    minuten = minuten < 10 ? "0" + minuten : minuten;
    sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
    millisekunden = "000" + millisekunden;
    millisekunden = millisekunden.slice(millisekunden.length - 3);

    anzeige.innerHTML = stunden + ":" + minuten + ":" + sekunden + "." + millisekunden;
}

aktualisiereZeit();

