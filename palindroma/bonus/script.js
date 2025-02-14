function palindrome () {
    // Chiedo all'utente di inserire una parola
    const userWord = prompt('Enter a word')

    // Converto la stringa in un array e inverto gli elementi creando una nuova stringa

    let reversedWord = []

    // Split method per prendere ciascun carattere della stringa e inserirli in un array
    let userWordToArray = userWord.split('')
    console.log(userWordToArray);

    // For loop per prendere ciascun elemento dell'array e inserirlo al contrario in un nuovo array
    for (let i = 0; i < userWordToArray.length; i++) {
        let userWordChar = userWord.charAt(i)
        console.log(userWordChar);
        
        reversedWord.unshift(userWordChar)
        console.log(reversedWord);
    }

    // Join method per convertire gli elementi in una stringa unica, senza spazi
    reversedWord = reversedWord.join('')
    console.log(reversedWord);
    
    // If statement per controllare che le due stringhe risultanti siano uguali e per stampare il risultato nella pagina web
    if (reversedWord.toString() == userWord) {
        document.writeln('The word you entered is a palindrome')
    } else {
        document.writeln('The word you entered is not a palindrome')
    }
}

palindrome()