// Scrivere un numero random tra 0 e 10 dentro ognuno dei quadrati

// genero 10 numeri random
$('.quadrato').each(function() {

    var numero_random = generaRandom(0, 10);
    $(this).text(numero_random);

});

function generaRandom(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) ) + min;
  return random
}
