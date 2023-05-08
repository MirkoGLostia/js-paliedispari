/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire
*/

// variabili
let wordCheck;



// contenitore parola al contrarioi vuota
let reverseParolaUtente = "";







submit.onclick = function () {



    // chiedere parola utente
    const parolaUtente = document.getElementById("parola-utente").value;



    // risultato funzione
    wordCheck = palindromeCheck(parolaUtente, reverseParolaUtente);


    // stampa nella finestra
    document.getElementById("risposta").innerText = wordCheck;

}







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

    return result

}



