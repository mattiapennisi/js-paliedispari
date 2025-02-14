function palindrome () {
    // Chiedo all'utente di inserire una parola
    const userWord = prompt('Enter a word')

    // Converto la stringa in un array e inverto gli elementi creando una nuova stringa

    let reversedWord = []

    let userWordToArray = userWord.split('')
    console.log(userWordToArray);

    for (let i = 0; i < userWordToArray.length; i++) {
        let userWordChar = userWord.charAt(i)
        console.log(userWordChar);
        
        reversedWord.unshift(userWordChar)
        console.log(reversedWord);
    }

    reversedWord = reversedWord.join('')

    // for (let i = 0; i < userWord.length - 1; i++) {
    //     let userWordChar = userWord.slice(i, 1)
    //     console.log(userWordChar);
        
    //     reversedWord.unshift(userWordChar)
    //     console.log(reversedWord);
    // }

    // If statement per controllare che le due stringhe risultanti siano uguali e per stampare il risultato nella pagina web
    if (reversedWord.toString() == userWord) {
        document.writeln('The word you entered is a palindrome')
    } else {
        document.writeln('The word you entered is not a palindrome')
    }
}

palindrome()