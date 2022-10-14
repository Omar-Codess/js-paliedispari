// Chiedo una parola all'utente
const userWord = prompt("Inserisci una parola")
console.log(userWord);


// Controllo se è palindroma creando una funzione

function checkPalindrome(userWord) {
    const length = userWord.length;
    let result = "";
    for (let i = 0; i < length / 2; i++) {

        if(userWord[i] !== userWord[length - 1 - i]){
            result = `La parola inserita non è palindroma`;
        } else {
            result = `La parola inserita è palindroma`
        }
    }
    return result
} 
// Restituisco il risultato
const value = checkPalindrome(userWord);
console.log(value);