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

    var bubble = $('.template .bubble-msg').clone().prepend('<h1>Gabriele</h1>');

    bubble.addClass('mio-bubble-msg');

    // inserire il messaggio_utente nel template bubble in html
    bubble.find('p.text-message').text(messaggio_utente);

    // inviare il messaggio

    if ($('#input-msg').val() == '') {
        alert('Errore: input vuoto!');
    } else {

        // Inserisco il bubble con il mio messaggio dentro allo spazio centrale
        $('.right-center').append(bubble);

// Messaggio di Risposta automatica dopo 1 secondo
        setTimeout(function() {

            var bubble_risposta = $('.template .bubble-msg').clone().prepend('<h1>Pdor</h1>');

            bubble_risposta.addClass('contatto-bubble-msg');

            bubble_risposta.find('p.text-message').text('Ok!');

            $('.right-center').append(bubble_risposta);

        }, 1000);
    };

    $('#input-msg').val('');

};


// ---------------------------------- Input Cerca

$('.cerca-wrapper .material-icons').click(function() {

// Intercetto il valore scritto all'interno dell'INPUT cerca
var testo_search = $('.cerca input').val().trim().toLowerCase();

// Controllo che all'interno di .all-chat sia presente lo stesso testo dell'INPUT
var single_chat = $('.all-chat').text().toLowerCase();

if (single_chat.includes(testo_search)) {
    console.log('nome trovato');
} else {
    console.log('nome non trovato');
};

// Se ci sono parole uguali, nascondo le .single-chat dove non è presente la parola dell'INPUT

// Visualizzo la .single-chat con all'interno quella parola

});















// END
