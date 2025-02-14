// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari
const userChoice = prompt('Enter "even" or "odd"')
console.log(userChoice);


// L'utente sceglie un numero da 1 a 5
const userNum = prompt('Enter a number from 1 to 5')
console.log(userNum);


// Funzione per generare un numero casuale da 1 a 5 per la scelta del pc
function generatePcNum () {
    const pcNum = Math.floor(Math.random()*5 + 1)
    console.log(pcNum);
} 

generatePcNum()