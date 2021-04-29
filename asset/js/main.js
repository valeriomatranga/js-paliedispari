//chiedere una parola all'utente
/* var parolaUtente = prompt("Scrivi una parola qualsiasi!");
 */
//verificare tramite una funzione che la parola inserita sia palindroma
function palindroma (testo){
    var testoIniziale = testo;
    testo = testo.split("");
    testo = testo.reverse()
    var testoRovesciato = testo.join('');
    var verifica;
    if ( testoIniziale === testoRovesciato){
        verifica = "La parola scelta e palindroma"
    }else{
        verifica = "E una semplice parola"
    }
    console.log(verifica);
}

var parola = prompt("Scrivi una parola qualsiasi!");
palindroma(parola) 



