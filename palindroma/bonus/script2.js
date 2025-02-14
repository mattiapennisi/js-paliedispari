function palindrome () {
    // Chiedo all'utente di inserire una parola
    const userWord = prompt('Enter a word')

    // Converto la stringa in un array e inverto gli elementi creando una nuova stringa

    let reversedWord = []

    let userWordToArray = []

    let userWordChar = null

    for (let i = 0; i < userWord.length; i++) {
        userWordChar = userWord.slice(i)
        console.log(userWordChar);
        
        userWordToArray.push(userWordChar)
        console.log(userWordToArray);
    }

    for (let i = 0; i < userWord.length; i++) {
        let userWordChar = userWordToArray.pop()
        console.log(userWordChar);
        
        reversedWord.unshift(userWordChar)
        console.log(reversedWord);
    }

    reversedWord = reversedWord.join('')

    // If statement per controllare che le due stringhe risultanti siano uguali e per stampare il risultato nella pagina web
    if (reversedWord.toString() == userWord) {
        document.writeln('The word you entered is a palindrome')
    } else {
        document.writeln('The word you entered is not a palindrome')
    }
}

palindrome()