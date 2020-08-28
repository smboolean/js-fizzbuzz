// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// 1. Scrivi un programma che stampi i numeri da 1 a 100
// for (var i = 1; i <= 100; i++) {
//   console.log(i);
//   // 2. se i è un multiplo di 3 stampo "Fizz"
//   // 3. se i è un multiplo di 5 stampo "Buzz"
//   // 4. se i è sia un multiplo di 3 che di 5 stampo "FizzBuzz"
//   // 5. altrimenti stampo il numero i
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

var contatore = 1;
while (contatore <= 100) {

  var contenutoPrecedente = document.getElementById("lista").innerHTML;

  if(contatore % 3 == 0 && contatore % 5 == 0) {
    //console.log("FizzBuzz");
    contenutoPrecedente += "<li style='color: red'>FizzBuzz</li>";
  } else if (contatore % 3 == 0) {
    //console.log("Fizz");
    contenutoPrecedente += "<li>Fizz</li>";
  } else if (contatore % 5 == 0) {
    //console.log("Buzz");
    contenutoPrecedente += "<li>Buzz</li>";
  } else {
    //console.log(contatore);
    contenutoPrecedente += "<li>"+contatore+"</li>";
  }

  document.getElementById("lista").innerHTML = contenutoPrecedente;

  contatore++;
}
