// L'utente sceglie pari o dispari
let userChoice = prompt('Enter "even" or "odd"').toLowerCase()

// Ciclo while per evitare che l'utente inserisca qualcosa di diverso da 'even' o 'odd'. L'input non è case sensitive perché viene sempre convertito tramite il method .toLowerCase()
while (userChoice != 'even' && userChoice != 'odd') {
    userChoice = prompt('Invalid input. Please, enter "even" or "odd"').toLowerCase()
}

// L'utente sceglie un numero da 1 a 5
let userNum = Number(prompt('Enter a number from 1 to 5'))
let userNumStr = userNum.toString()

// Ciclo while per evitare che l'utente inserisca input non validi, numeri che non vanno da 1 a 5 o decimali tra 1 e 5
while (isNaN(userNum) || userNum < 1 || userNum > 5 || userNumStr.length > 1) {
    userNum = Number(prompt('Invalid input. Please, enter a number from 1 to 5'))
    userNumStr = userNum.toString()
} 

document.writeln(`You chose ${userChoice} and ${userNum} <br><br>`)

// Funzione per generare un numero casuale da 1 a 5 per la scelta del pc
let pcNum = null

function generatePcNum () {
    pcNum = Math.floor(Math.random()*5 + 1)
    document.writeln(`Pc chose ${pcNum} <br><br>`)
} 

generatePcNum()

// Sommo il numero dell'utente e quello del pc

const sum = userNum + pcNum
document.writeln(`The sum of these numbers is ${sum} <br><br>`)

// Funzione per stabilire se la somma dei numeri è pari o dispari

let sumEvenOdd = null

function isEvenOrOdd() {
    if (sum % 2 == 0) {
        sumEvenOdd = 'even'
    } else if (sum % 2 == 1) {
        sumEvenOdd = 'odd'
    }
    document.writeln(`The sum is ${sumEvenOdd}, so: <br><br>`)
}

isEvenOrOdd()

// Stabilisco chi è il vincitore

if (sumEvenOdd == userChoice) {
    document.writeln('You won!')
} else {
    document.writeln('Pc won!')
}