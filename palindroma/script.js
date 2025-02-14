// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



function palindrome () {
    const userWord = prompt('Enter a word')
    const reversedWord = userWord.split('').reverse().join('');
    if (reversedWord == userWord) {
        document.writeln('The word you entered is palindrome')
    } else {
        document.writeln('The word you entered is not palindrome')
    }
}

palindrome()