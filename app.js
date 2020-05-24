var g = G$('John', 'Doe');
//console.log(g);

//g.greet().greet(true).setLang('es').greet().greet(true).log();

$('#login').click(function () {
    var loginGreeter = G$('John', 'Doe');

    $('#logindiv').hide();

    loginGreeter.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})