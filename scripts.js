
// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

//genero numero random per giocatore 1
var giocatore1 = Math.floor(Math.random() * 6) + 1;

// genero numero random per giocatore 2
var giocatore2 = Math.floor(Math.random() * 6) + 1;

console.log(giocatore1);
console.log(giocatore2);

//vittoria giocatore1
if (giocatore1 > giocatore2) {
    console.log('giocatore 1 ha vinto');
}
//pareggio
else if (giocatore1 == giocatore2) {
    console.log('pareggio');
}
//vittoria giocatore2
else {
    console.log('giocatore 2 ha vinto');
}


//conto quante volte vince un giocatore
var contatore1 = 0;
var contatore2 = 0;



for (var i = 0; i < array.length; i++) {
    array[i]
}
