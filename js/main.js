/*
*Calcolatore prezzo biglietto treno
*/

//Età
var eta = parseInt( prompt('Inserire la tua età'));

//Distanza
var distanzaKm = parseInt( prompt ('Inserire i chilometri da percorrere'));

//Prezzo Biglietto Normale
var prezzo = distanzaKm * 0.21;

//sconto minorenni
var sconto20 = prezzo * 0.2;

//sconto over 65
var sconto65 = prezzo * 0.4;

//Prezzo finale a seconda dell'età
if (eta < 18) {
  var prezzoFinale = prezzo - sconto20;
  document.getElementById('price').innerHTML = prezzoFinale;
} else if (eta >= 65) {
  var prezzoFinale = prezzo - sconto65;
  document.getElementById('price').innerHTML = prezzoFinale;
} else {
  var prezzoFinale = prezzo;
  document.getElementById('price').innerHTML = prezzoFinale;
}
