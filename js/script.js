// // Chiedo una parola all'utente
// const userWord = prompt("Inserisci una parola")
// console.log(userWord);


// // Controllo se è palindroma creando una funzione

// function checkPalindrome(userWord) {
//     const length = userWord.length;
//     let result = "";
//     for (let i = 0; i < length / 2; i++) {

//         if(userWord[i] !== userWord[length - 1 - i]){
//             result = `La parola inserita non è palindroma`;
//         } else {
//             result = `La parola inserita è palindroma`
//         }
//     }
//     return result
// } 
// // Restituisco il risultato
// const value = checkPalindrome(userWord);
// console.log(value);



















// Chiedo all'utente di inserire un numero da 1 a 5
const userNum = parseInt (prompt("Inserisci un numero da 1 a 5"));
console.log(userNum);

// Genero un numero casuale da 1 a 5
const cpuNum = Math.floor(Math.random() * 5) + 1;
console.log(cpuNum);

// Faccio la somma e stabilisco se è pari o dispari
function evenOrOdd(userNum, cpuNum) {
    const sum = userNum + cpuNum
    console.log(sum);
    let result = "";
    if(sum % 2 === 0) {
        result = "La somma è pari!"
    } else {
        result = "La somma è dispari"
    }

    return result;
}

const userVsCpu = evenOrOdd(userNum, cpuNum)

// Dichiaro il vincitore
console.log(userVsCpu);