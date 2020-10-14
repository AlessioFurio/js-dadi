
// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

var arrayGiocatori = [1, 2];
var risultato;
var numMatch = 10;
var contatoreGio1 = 0;
var contatoreGio2 = 0;





for (var j = 0; j < numMatch; j++) {

    for (var i = 0; i < arrayGiocatori.length; i++) {

        arrayGiocatori[i] = Math.floor(Math.random() * 6) + 1;
        console.log(arrayGiocatori[i]);
    }

        if (arrayGiocatori[0] < arrayGiocatori[1]) {
            risultato = false;
            console.log('vince giocatore 2');
        }
        else if (arrayGiocatori[0] > arrayGiocatori[1]) {
            risultato = true;
            console.log('vince giocatore 1');
        }
        else if (arrayGiocatori[0] == arrayGiocatori[1]) {
            risultato = null;
            console.log('pareggio');
        }

        if (risultato == false){
            contatoreGio2++;
        }
        else if (risultato == true) {
            contatoreGio1++;
        }
    }


if (contatoreGio1 < contatoreGio2){
    console.log('giocatore 2 ha vinto più match');
}
else if (contatoreGio1 > contatoreGio2) {
    console.log('giocatore 1 ha vinto più match');
}
else if (contatoreGio1 == contatoreGio2) {
    console.log('giocatore 1 e il giocatore 2 hanno vinto lo stesso numero di match');
}






// var arrayGiocatori = [1, 2];
// var risultato;
//
// for (var i = 0; i < arrayGiocatori.length; i++) {
//
//     arrayGiocatori[i] = Math.floor(Math.random() * 6) + 1;
//     console.log(arrayGiocatori[i]);
//
//     if (arrayGiocatori[0] < arrayGiocatori[1]) {
//         risultato = false;
//     }
//     else if (arrayGiocatori[0] > arrayGiocatori[1]) {
//         risultato = true;
//     }
//     else if (arrayGiocatori[0] == arrayGiocatori[1]) {
//         risultato = null;
//     }
// }
//
// if (risultato == false){
//     console.log('giocatore 2 ha vinto');
// }
// else if (risultato == true) {
//     console.log('giocatore 1 ha vinto');
// }
// else if (risultato == null) {
//     console.log('Pareggio');
// }
