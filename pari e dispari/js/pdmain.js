/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// variabili
let user, pc, numberAddition, userChoice;

// ricevere input bottone dello user
submit.onclick = function () {

    // valori numerici
    user = document.getElementById("user-number").value;
    pc = parseInt(randomIntFromInterval(1, 5));



    // scelta pari o dispari
    userChoice = document.querySelector('input[name="even-or-odd"]:checked').value;



    // output numeri user e pc
    document.getElementById("user-value").innerText = user;
    document.getElementById("pc-value").innerText = pc;




    // somma valori
    numberAddition = (user + pc);



    // vediamo se la somma è pari
    const result = isItEven(numberAddition);

    console.log(result);
    
    

    // ciclo per selezionare il risultato di chi vince
    if ((result == Boolean(true) && userChoice == 1) || (result == Boolean(false) && userChoice == 0)) {

        document.getElementById("result-game").innerText = "User wins";

    } 
    else {
        document.getElementById("result-game").innerText = "Pc wins";

    }
}


// funzioni

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function isItEven(num) { 
    return num % 2 === 1;
}
