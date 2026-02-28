// Task 1: Età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

const ageFirst = prompt("Please enter Mario's age", "Ex. 18")
const ageSecond = prompt("Please enter Giovanna's age", "Ex. 56")

console.log(ageFirst, ageSecond);

if (ageFirst > ageSecond) {
    console.log("Mario is greater than Giovanna");
    
} else if (ageSecond > ageFirst) {
    console.log("Giovanna is greater than Mario");
    
} else {
    console.log("Mario and Giovanna are the same age");
    
}


// Task 2: Pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.



// Task 3: Quanto manca (OPZIONALE): utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.