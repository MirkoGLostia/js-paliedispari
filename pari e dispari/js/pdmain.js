/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// variabili
let user, pc, numberAddition;

// ricevere input bottone dello user
submit.onclick = function () {

    // user deve inserire 
    user = parseInt(randomIntFromInterval(1, 5));
    pc = parseInt(randomIntFromInterval(1, 5));


    // output risultati
    document.getElementById("user-dice").innerText = user;
    document.getElementById("pc-dice").innerText = pc;




    // somma valori
    numberAddition = (user + pc);

    const result = isItEven(numberAddition);

    console.log(result);
    
    
    if (result == 1) {

        document.getElementById("result-of-roll").innerText = "User wins";

    } 
    else {
        document.getElementById("result-of-roll").innerText = "Pc wins";

    }
}


// funzioni

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function isItEven(num) { 
    return num % 2 === 0;
}

