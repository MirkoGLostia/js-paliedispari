/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire
*/

// contenitore parola al contrarioi vuota
let reverseWord = "";



// chiedere parola utente
const parolaUtente = prompt("la tua parola");



// ciclo per invertire parola
for (let i = (parolaUtente.length - 1); i >= 0; i--) {
    
    const lettere = parolaUtente[i];

    reverseWord += lettere;
    
}


// confronto parola utente e reverse
if (parolaUtente === reverseWord) {
    
    console.log("palindromo");

}
else {

    console.log("non palindromo");

}
