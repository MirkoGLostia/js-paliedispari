/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire
*/

// contenitore parola al contrarioi vuota
let reverseParolaUtente = "";



// chiedere parola utente
const parolaUtente = prompt("la tua parola");



// risultato della funzione
let wordCheck = palindromeCheck(parolaUtente, reverseParolaUtente);




// functions
function palindromeCheck (word, reverse) {

    let result = "non palindromo";

    // ciclo per invertire parola
    for (let i = (word.length - 1); i >= 0; i--) {
        
        const lettere = word[i];
    
        reverse += lettere;
        
    }
    
    // confronto parola utente e reverse
    if (word === reverse) {
        
        result = "palindromo";

        console.log("palindromo");
    
    }
    else {
    
        console.log("non palindromo");
    
    }

    return result

}



