//chiedere una parola all'utente e richiamare la funzione
/* var parola = prompt("Scrivi una parola qualsiasi!");
palindroma(parola) 

//verifica tramite una funzione che la parola inserita sia palindroma
function palindroma (testo){
    var testoIniziale = testo;
    testo = testo.split("");
    testo = testo.reverse();
    var testoRovesciato = testo.join('');
    var verifica = "";
    if ( testoIniziale === testoRovesciato){
        verifica = "La parola scelta e palindroma"
    }else{
        verifica = "E una semplice parola"
    }
    return verifica;
}

var risultato = palindroma(parola);
console.log(risultato);
 */

// chiedere all'utente pari o dispari e un mumero da 1 a 5
var sceltaUtente = prompt("Scegli pari o dispari");
console.log(sceltaUtente);
var numero = Number(prompt('inserisci un mumero da 1 a 5'));
console.log(numero);

function sceltaPc(number){
    number = Math.ceil(Math.random()*5);
    var scelta = number;
    return scelta;
}

var numeroPc = sceltaPc();
console.log(numeroPc);

