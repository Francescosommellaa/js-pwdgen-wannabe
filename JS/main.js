// Chiedi all'utente il suo nome
let nome = prompt("Qual è il tuo nome?");

console.log(nome);


// Chiedi all'utente il suo cognome
let cognome = prompt("Qual è il tuo cognome?");

console.log(cognome);


// Chiedi all'utente il suo colore preferito
let colorePreferito = prompt("Qual è il tuo colore preferito?");

console.log(colorePreferito);


// Combina le risposte dell'utente
let combinazione = nome + cognome + colorePreferito + "23";

console.log(combinazione);


// Trova l'elemento con l'ID specifico
let elemento = document.getElementById("inputNameSurnameColor");

// Scrivi la combinazione all'interno dell'elemento
elemento.innerHTML = combinazione;