//# TITOLO
//* Palidroma

//# TRACCIA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//# RACCOLTA DATI
const parolaUtente = prompt(
  "Scrivi la parola che vuoi verificare sia palindroma: "
);

//# ELABORAZIONE
function checkPalindromy(parola) {
  if (parola.length > 0) {
    for (let i = 0; i < parola.length / 2; i++) {
      if (parola[i] !== parola[parola.length - i - 1]) {
        return false;
      }
    }
  }
  return true;
}

const palindroma = checkPalindromy(parolaUtente);
console.log(palindroma);

//# OUTPUT
