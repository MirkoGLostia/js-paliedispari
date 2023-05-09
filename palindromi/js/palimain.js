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

    const parolaUtenteNospace = noSpace(parolaUtente);



    // risultato funzione
    wordCheck = palindromeCheck(parolaUtenteNospace, reverseParolaUtente);


    // stampa nella finestra
    document.getElementById("risposta").innerText = wordCheck;

    console.log(parolaUtente);
    console.log(parolaUtenteNospace);
    console.log(reverseParolaUtente);

}







// functions
function palindromeCheck (word, reverse) {

    let result = "non palindromo";

    // ciclo per invertire parola
    for (let i = (word.length - 1); i >= 0; i--) {
        
        let lettere = word.charAt(i);
    
        if (lettere == " ") {
            
            i--

            lettere = word.charAt(i);

        }

        reverse += lettere;
        
    }
    
    // confronto parola utente e reverse
    if (word === reverse) {
        
        result = "palindromo";

        console.log("palindromo");
    
    }

    return result

}

function noSpace (word) {

    let wordNoSpace = "";

    // ciclo per invertire parola
    for (let i = 0; i < word.length; i++) {
        
        let lettere = word.charAt(i);
    
        if (lettere == " ") {
            
            i++

            lettere = word.charAt(i);

        }

        wordNoSpace += lettere;

        
    }

    const result = wordNoSpace;

    return result;

}



