$(function () {
    $('#vhod').on('click', function () {
        $('#formVhod').css('margin', 'auto');
        $('#sign-up').css('display', 'none');
        $('#sign-in').css({ display: 'block', position: 'fixed', margin: 'auto', zIndex: 1000, width: 350, top: 140, left: 498 });
        $('#new-reg').on('click', function () {
            $('#sign-in').css('display', 'none');
            $('#sign-up').css({ display: 'block', position: 'fixed', margin: 'auto', zIndex: 1000, width: 350, top: 140, left: 498 });
            $('#close1').on('click', function () {
                $('#sign-up').css('display', 'none');
            });
        })
        $('#subLogin').on('click', function (event) {
            event.preventDefault();
            var username = $('#username').val();
            var password = $('#password').val();
            if (userList.login(username, password)) {
                $('#vhod').css('display', 'none');
                $('#sign-in').css('display', 'none');
                $('#sign-up').css('display', 'none');
                $('#reg').css('display', 'none');
                $('#userIn').text('Вие сте логнат като:"' + username + '"');
            } else {
                $('#error').css('display', 'block');
                $('#username').val('');
                $('#password').val('');
            }
        })
        $('#close').on('click', function () {
            $('#sign-in').css('display', 'none');
        })
    })

    $('#reg').on('click', function () {
        $('#formVhod').css('margin', 'auto');
        $('#sign-in').css('display', 'none');
        $('#sign-up').css({ display: 'block', position: 'fixed', margin: 'auto', zIndex: 1000, width: 350, top: 140, left: 498 });
        $('#subReg').on('click', function (event) {
            event.preventDefault();
            var username = $('#username1').val();
            var password = $('#password1').val();
            var repeatPassword = $('#repPass').val();
            var email = $('#email').val();
            if (userList.addUser(username, password, repeatPassword, email)) {
                $('#formVhod').css('margin', 'auto');
                $('#sign-up').css('display', 'none');
                $('#sign-in').css({ display: 'block', position: 'fixed', margin: 'auto', zIndex: 1000, width: 300, top: 140, left: 498 });
                $('#close').on('click', function () {
                    $('#sign-in').css('display', 'none');
                })
            } else {
                $('#username1').val('');
                $('#password1').val('');
                $('#repPass').val('');
                $('#email').val('');
            }
        });
        $('#close1').on('click', function () {
            $('#sign-up').css('display', 'none');
        });
    });
});