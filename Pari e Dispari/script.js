//# TITOLO
//* Pari e Dispari

//# TRACCIA

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//# RACCOLTA DATI
let PariODispUtente = prompt("Scegli pari o dispari: ");
PariODispUtente = PariODispUtente.toLowerCase();
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5: "));
//* let numeroValido = false;
//* if (numeroUtente >= 1 && numeroUtente <= 5) {
//*   numeroValido = true;
//* }
//* while (!numeroValido) {
//*   numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5: "));
//*   if (numeroUtente >= 1 && numeroUtente <= 5) {
//*     numeroValido = true;
//*   }
//* }

//# ELABORAZIONE
function generaNumeroCpu(min, max) {
  return parseInt(Math.random() * max) + min;
}

const sum = numeroUtente + generaNumeroCpu(1, 5);
console.log(sum);
function verificaParioDisp(numero) {
  if (numero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

//# OUTPUT

if (verificaParioDisp(sum) === PariODispUtente) {
  alert("Ha vinto il giocatore");
} else {
  alert("Ha vinto la cpu");
}
