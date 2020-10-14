
// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

var arrayGiocatori = [1, 2];
var risultato;

for (var i = 0; i < arrayGiocatori.length; i++) {

    arrayGiocatori[i] = Math.floor(Math.random() * 6) + 1;
    console.log(arrayGiocatori[i]);

    if (arrayGiocatori[0] < arrayGiocatori[1]) {
        risultato = false;
    }
    else if (arrayGiocatori[0] > arrayGiocatori[1]) {
        risultato = true;
    }
    else if (arrayGiocatori[0] == arrayGiocatori[1]) {
        risultato = null;
    }
}

if (risultato == false){
    console.log('giocatore 2 ha vinto');
}
else if (risultato == true) {
    console.log('giocatore 1 ha vinto');
}
else if (risultato == null) {
    console.log('Pareggio');
}
