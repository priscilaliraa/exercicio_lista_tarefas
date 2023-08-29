$(document).ready(function() {
    $('header button').click(function() { 
        $('form').slideDown(); 
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); 
    })

    $('form').on('submit', function(e) {
        e.preventDefault(); 
        const campoTarefa = $('#campo-tarefa').val();
        const novoItem = $('<li style="display: flexwrap"></li>');
        $(`<li>${campoTarefa}</li>` ).appendTo(novoItem);
        $(novoItem).appendTo('ul').click();

        })
    })
