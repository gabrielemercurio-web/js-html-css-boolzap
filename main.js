// intercettare il click dell'utente sulla classe .invia-msg

$('.invia-msg').click(function () {

    // intercettare il messaggio che l'utente scriverà nell'input
    // salvare il messaggio scritto dell'utente in una var
    var messaggio_utente = $('.scrivi-messaggio input').val();
    console.log(messaggio_utente);

    var bubble = $('.template .mio-bubble-msg').clone();

    // inserire il messaggio_utente nel template bubble in html
    bubble.find('p.text-message').text(messaggio_utente);

    // inviare il messaggio

    if ($('#input-msg').val() == '') {
        alert('Errore: input vuoto!');
    } else {
        $('.right-center').append(bubble);
    };

    $('#input-msg').val('');

});
