// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

function palindrome () {
    // Chiedo all'utente di inserire una parola
    const userWord = prompt('Enter a word')
    // Converto la stringa in un array e inverti gli elementi creando una nuova stringa
    const reversedWord = userWord.split('').reverse().join('');
    // If statement per controllare che le due stringhe risultanti siano uguali o meno e stampo il risultato nella pagina web
    if (reversedWord == userWord) {
        document.writeln('The word you entered is palindrome')
    } else {
        document.writeln('The word you entered is not palindrome')
    }
}

palindrome()