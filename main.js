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
    var messaggio_utente = $('input#input-msg').val();

    var bubble = $('.template .bubble-msg').clone().prepend('<h1>Gabriele</h1>');

    bubble.addClass('mio-bubble-msg');

    // inserire il messaggio_utente nel template bubble in html
    bubble.find('p.text-message').text(messaggio_utente);

    // inviare il messaggio
    // se il campo dell'input è vuoto
    if ($('input#input-msg').val() == '') {
        alert('Errore: input vuoto!');
    } else {
        // Altrimenti, inserisco il bubble con il mio messaggio dentro allo spazio centrale
        $('.right-center.active').append(bubble);
        // Svuoto il campo input
        $('#input-msg').val('');

        // Messaggio di Risposta automatica del PC dopo 1 secondo
        setTimeout(function() {

            var bubble_risposta = $('.template .bubble-msg').clone();

            var chat_active = $('.active').data('single-chat');

            $(bubble_risposta).prepend('<h1>' + chat_active + '</h1>');

            bubble_risposta.addClass('contatto-bubble-msg');

            bubble_risposta.find('p.text-message').text('Ok!');

            $('.right-center.active').append(bubble_risposta);

        }, 1000);
    };


};





// ---------------------------------- Input Cerca

$('.cerca-wrapper .material-icons').click(function() {

    // Intercetto il valore scritto all'interno dell'INPUT cerca
    var testo_search = $('.cerca input').val().trim().toLowerCase();

    // Controllo che all'interno di .all-chat sia presente lo stesso testo dell'INPUT

    $('.single-chat').each(function() {

        var single_chat = $(this).find('.name p').text().toLowerCase();

        if (single_chat.includes(testo_search)) {
            $(this).show();
        } else {
            $(this).hide();
        };
    })
});

$('.cerca-wrapper input.search-contact').keyup(function() {

    // Intercetto il valore scritto all'interno dell'INPUT cerca
    var testo_search = $('.cerca input').val().trim().toLowerCase();

    // Controllo che all'interno di .all-chat sia presente lo stesso testo dell'INPUT

    $('.single-chat').each(function() {

        var single_chat = $(this).find('.name p').text().toLowerCase();

        if (single_chat.includes(testo_search)) {
            $(this).show();
        } else {
            $(this).hide();
        };
    })
});





// Al click di una single-chat visualizzo la relativa conversazione a destra
$('.single-chat').click(function() {

    $('.right-center').removeClass('active');

    var single_chat = $(this).find('.name p').text();

    $('.right-center[data-single-chat="'+ single_chat +'"]').addClass('active');

    $('#input-msg').keypress(function(event) {
        if (event.which == 13) {
            invia_messaggio();
        }
    });
});















// END
