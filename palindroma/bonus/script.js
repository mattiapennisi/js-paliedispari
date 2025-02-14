function palindrome () {
    // Chiedo all'utente di inserire una parola
    const userWord = prompt('Enter a word')

    // Converto la stringa in un array e inverto gli elementi creando una nuova stringa
    // let userWordToArray = userWord.split('')
    // console.log(userWordArray);

    let reversedWord = []
    
    let userWordChar = null

    for (let i = 0; i < 4; i++) {
        userWordChar = userWord.slice(i, 1)
        console.log(userWordChar);
        
        reversedWord.unshift(userWordChar)
        console.log(reversedWord);
    }

    // If statement per controllare che le due stringhe risultanti siano uguali e per stampare il risultato nella pagina web
    if (reversedWord.toString() == userWord) {
        document.writeln('The word you entered is a palindrome')
    } else {
        document.writeln('The word you entered is not a palindrome')
    }
}

palindrome()