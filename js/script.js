var nomeUtente;
var listaNomi = ["aldo", "juanito", "carmen", "carmelo", "Alejandro"];


while (!(nomeUtente)) {
    nomeUtente = prompt("Inserire proprio nome (non lasciare vuoto!").toLowerCase();
}

listaNomi.push(nomeUtente);

listaNomi = listaNomi.map(name => name.toLocaleLowerCase());
listaNomi.sort();

listaHtml = "<li>" + listaNomi.join("</li><li>") + "</li>";
document.getElementById("lista_nomi").innerHTML = listaHtml;

var indice = "";
for (var i = 0; i < listaNomi.length; i++) {
    if ((!indice) && (listaNomi[i] == nomeUtente)) {
        var indice = i;
    }
}

indice = "";
var i = 0;
while (!indice) {
    if (listaNomi[i] == nomeUtente) {
        indice = i;
    }
    i++;
}


document.getElementById("posizione_utente").innerHTML = indice + 1;