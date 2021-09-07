/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

let studente = {
    nome:'Andrea',
    cognome:'Maltempi',
    età:33,
};

for(let proprietà in studente){
    console.log(proprietà);
    console.log(studente[proprietà]);
}

let arraystudenti = [studente,studente,studente,studente,studente];

for(let i = 0; i < arraystudenti.length; i++){
    console.log(arraystudenti[i].nome , arraystudenti[i].cognome);
}
let nuovoStudente = {
    nome:'',
    cognome:'',
    età: 0 ,
 };


arraystudenti.push(nuovoStudente);

nuovoStudente.nome = prompt("Inserisci nome");
nuovoStudente.cognome = prompt("Inserisci cognome");
nuovoStudente.età= prompt("Inserisci età");



console.log(arraystudenti);