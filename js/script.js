var nomeUtente;
var listaNomi = ["aldo", "juanito", "carmen", "carmelo", "Alejandro", "ZORRO"];

// VALIDATE USERNAME
while (!nomeUtente) {
    nomeUtente = prompt("Inserire proprio nome (non lasciare vuoto!").toLowerCase();
}
// PUSH nomeUtente TO listaNomi
listaNomi.push(nomeUtente);

// PREPROCESS listaNomi 
listaNomi = listaNomi.map(name => name.toLowerCase());
// SORT listaNomi
listaNomi.sort();

// FIND listaNomi INDEX OF nomeUtente
var indice = "";
for (var i = 0; i < listaNomi.length; i++) {
    if ((!indice) && (listaNomi[i] == nomeUtente)) {
        var indice = i;
    }
}

indice = "";
var i = 0;
while (!indice && i < listaNomi.length) {
    //qua la verifica che i < .length non è effettivamente necessaria, ma hai visto mai
    if (listaNomi[i] == nomeUtente) {
        indice = i;
    }
    i++;
}

// CREATE LIST OF LI HTML TAGS FROM listaNomi
listaHtml = "<li>" + listaNomi.join("</li><li>") + "</li>";

// OUTPUT listaHTML AND indice TO index.html
document.getElementById("lista_nomi").innerHTML = listaHtml;
document.getElementById("posizione_utente").innerHTML = indice + 1;