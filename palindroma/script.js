function palindrome () {
    // Chiedo all'utente di inserire una parola
    const userWord = prompt('Enter a word')

    // Converto la stringa in un array e inverto gli elementi creando una nuova stringa
    const reversedWord = userWord.split('').reverse().join('');

    // If statement per controllare che le due stringhe risultanti siano uguali e per stampare il risultato nella pagina web
    if (reversedWord == userWord) {
        document.writeln('The word you entered is a palindrome')
    } else {
        document.writeln('The word you entered is not a palindrome')
    }
}

palindrome()