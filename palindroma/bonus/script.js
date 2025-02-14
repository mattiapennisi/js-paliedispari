// Bonus

// Chiedo all'utente di inserire una parola
const userWord = prompt('Enter a word') 

let reversedWord = ''

let userWordChar = null

// Funzione per invertire la parola inserita dall'utente e stabilire se è palindroma

function palindrome () {

    // Controllo tutti i caratteri inseriti e li aggiungo al contrario a una nuova stringa
    for (let i = userWord.length - 1; i >= 0 ; i--) {
        userWordChar = userWord.charAt(i)
        
        reversedWord += (userWordChar)
    }

    // If statement per controllare che le due stringhe risultanti siano uguali e per stampare il risultato nella pagina web
    if (reversedWord == userWord) {
        document.writeln('The word you entered is a palindrome')
    } else {
        document.writeln('The word you entered is NOT a palindrome')
    }
}

palindrome()