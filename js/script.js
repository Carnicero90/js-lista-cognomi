var nomeUtente;
var listaNomi = ["gIANNI", "franceSco", "aldo", "juanito", "carmen", "carmelo", "Alejandro", "ZORRO"];

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
// ---via FOR loop
var indice = "";
for (var i = 0; i < listaNomi.length; i++) {
    if ((!indice) && (listaNomi[i] == nomeUtente)) {
        var indice = i + 1;
    }
}

// ---via WHILE loop
indice = "";
var i = 0;
while (!indice && i < listaNomi.length) {
    // ---qua la verifica che i < .length non è effettivamente necessaria, ma hai visto mai
    if (listaNomi[i] == nomeUtente) {
        indice = i + 1;
    }
    i++;
}

// ---via .indexOf METHOD
indice = "";
indice = listaNomi.indexOf(nomeUtente) + 1;

// CREATE LIST OF LI HTML TAGS FROM listaNomi
listaHtml = "<li>" + listaNomi.join("</li><li>") + "</li>";
// CREATE STRING SHOWING (INDEX OF nomeUtente) || (ERROR MESSAGE)
ordineUtente = indice ? `Sei il numero ${indice} in lista.` : "ERRORE: nome non trovato in lista!\nRiprovare più tardi.";
// ---come sopra: non necessario, utile eventualmente per il futuro

// OUTPUT listaHTML AND ordineUtente TO index.html
document.getElementById("lista_nomi").innerHTML = listaHtml;
document.getElementById("posizione_utente").innerHTML = ordineUtente;