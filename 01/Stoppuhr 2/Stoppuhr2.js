function uhr() {

datum = new Date();
tag = datum.getDate();
monat = datum.getMonth() + 1;
jahr = datum.getFullYear();
stunden = datum.getHours();
minuten = datum.getMinutes();
sekunden = datum.getSeconds();

document.getElementById("Datum").innerHTML = tag + "." + monat + "." + jahr + " " + stunden + ":" + minuten
    + " " + sekunden;

}
window.setInterval("uhr()", 1000)