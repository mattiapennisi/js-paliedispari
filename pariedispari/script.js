// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari
const userChoice = prompt('Enter "even" or "odd"').toLowerCase()
console.log(userChoice);


// L'utente sceglie un numero da 1 a 5
const userNum = Number(prompt('Enter a number from 1 to 5'))
console.log(userNum);


// Funzione per generare un numero casuale da 1 a 5 per la scelta del pc
let pcNum = null

function generatePcNum () {
    pcNum = Math.floor(Math.random()*5 + 1)
    console.log(pcNum);
} 

generatePcNum()

// Sommo il numero dell'utente e quello del pc

const sum = userNum + pcNum
console.log(sum);

// Funzione per stabilire se la somma dei numeri è pari o dispari

let sumEvenOdd = null

function isEvenOrOdd() {
    if (sum % 2 == 0) {
        sumEvenOdd = 'even'
    } else if (sum % 2 == 1) {
        sumEvenOdd = 'odd'
    }
    console.log(sumEvenOdd);
}

isEvenOrOdd()

// Stabilisco chi è il vincitore e lo stampo nella pagina web

if (sumEvenOdd == userChoice) {
    document.writeln('You won!')
} else {
    document.writeln('You lost!')
}