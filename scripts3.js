
// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.



var contatore1 = 0;
var contatore2 = 0;
var numeroPartite = 10;

var vincitore1 = true;
var vincitore2 = false;


for (var i = 0; i < numeroPartite; i++) {
    //genero numero random per giocatore 1
    var giocatore1 = Math.floor(Math.random() * 6) + 1;

    // genero numero random per giocatore 2
    var giocatore2 = Math.floor(Math.random() * 6) + 1;

    console.log(giocatore1);
    console.log(giocatore2);

//vittoria giocatore1
if (giocatore1 > giocatore2) {
    console.log('giocatore 1 ha vinto');
    vincitore1 = true;
    contatore1++;
}
//pareggio
else if (giocatore1 == giocatore2) {
    console.log('pareggio');
}
//vittoria giocatore2
else {
    console.log('giocatore 2 ha vinto');
    vincitore2 = false;
    contatore2++;
}
}

    console.log('il 1 ha vinto ' + contatore1 + 'volte');


    console.log('il 2 ha vinto ' + contatore2 + 'volte');
