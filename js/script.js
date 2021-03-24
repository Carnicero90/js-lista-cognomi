var nomeUtente;
var listaNomi = ["aldo", "juanito", "carmen", "carmelo", "Alejandro"];


while (!(nomeUtente)) {
    nomeUtente = prompt("Inserire proprio nome (non lasciare vuoto!").toLowerCase();
}

listaNomi.push(nomeUtente);

listaNomi = listaNomi.map(name => name.toLocaleLowerCase());
listaNomi.sort();

var indice;
for (var i = 0; i < listaNomi.length; i++) {
    var nome = listaNomi[i];
    if (!indice && nome == nomeUtente) {
        var indice = i + 1;
        console.log(i);
    }
    document.getElementById("lista_nomi").innerHTML += `<li>${nome}</li>`
}

document.getElementById("posizione_utente").innerHTML = indice;