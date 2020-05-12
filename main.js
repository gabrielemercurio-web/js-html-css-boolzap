// intercettare il click dell'utente sulla classe .invia-msg

$('.invia-msg').click(invia_messaggio);

// intercettare il tasto ENTER dell'utente sull'id #input-msg
$('#input-msg').keypress(function(event) {
    if (event.which == 13) {
        invia_messaggio();
    }
});

function invia_messaggio (){
    // intercettare il messaggio che l'utente scriverà nell'input
    // salvare il messaggio scritto dell'utente in una var
    var messaggio_utente = $('.scrivi-messaggio input').val();

    var bubble = $('.template .bubble-msg').clone();

    bubble.addClass('mio-bubble-msg');

    // inserire il messaggio_utente nel template bubble in html
    bubble.find('p.text-message').text(messaggio_utente);

    // inviare il messaggio

    if ($('#input-msg').val() == '') {
        alert('Errore: input vuoto!');
    } else {
        $('.right-center').append(bubble);
    };

    $('#input-msg').val('');


    // Messaggio di Risposta
    setTimeout(function() {

        var bubble_risposta = $('.templete .bubble-msg').clone();

        bubble_risposta.addClass('contatto-bubble-msg');

        bubble_risposta.find('p.text-message').text('Ok!');

        $('.right-center').append(bubble_risposta);

        console.log(bubble_risposta);

    }, 1000);

};


















// END
