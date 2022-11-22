let zahl = 0;

function newElement() {
    console.log("erstellen")
    let li = document.createElement("li");
    let nummer = document.createTextNode(zahl);
    li.appendChild(nummer);
    if (zahl % 2 === 0) {
        li.style.color = "green";
    }
    else {
        li.style.color = "red";
    }
    let l = document.getElementById("liste");
    l.appendChild(li);
    zahl++;
}

function resetElement() {
    console.log("reset")
    document.getElementById("liste").innerHTML = "";
    zahl = 0;
}