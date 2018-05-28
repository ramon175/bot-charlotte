$(document).ready(() => {

    console.log("login.js loaded");

    $('#ra').val('20723496');
    $('#password').val('12345');

    // dropify activation
    let dropify = $('.dropify').dropify({
        messages: {
            'default': 'Arraste um arquivo aqui ou clique',
            'replace': 'Arraste um arquivo ou clique para substituir',
            'remove': 'Remover',
            'error': 'Algo de errado aconteceu!'
        },
        error: {
            'fileExtension': 'Este formato de arquivo não é permitido ({{ value }} somente)'
        }

    });
    // 

    // login submit form
    $('#loginForm').submit((event) => {

        event.preventDefault();

        let ra = $('#ra').val(),
            password = $('#password').val();

        let credentials = {
            login: ra,
            password
        }

        login({
            credentials
        });

    });
    // 

    // file send method

    dropify.on('change', (event, elemet) => {

        $("#submitFile").toggleClass('hide');
    });

    $("#submitFile").click((e) => {
        e.preventDefault();

        $("#submitFile").submit();
    })

    $("#submitFile").submit((e) => {

        e.preventDefault();

        let file = dropify[0].files[0];
        var data = new FormData();

        data.append("file", file);

        // console.log(data);

        $.post({
            url: '/questions/bulk',
            data: data,
            processData: false,
            contentType: false
        }, (result, err) => {

            if (err) {
                console.log(err);
                Materialize.toast(result.msg, 4000)
            }

            console.log(result);
            Materialize.toast("Upload concluído com sucesso!", 4000)
            // console.log(err);

        });


    });

    // 

});
// login function
function login(credentials) {
    console.log("Login");

    $.post('/user/authenticate', credentials, (result, err) => {
        // console.log(result);

        if (!result.err) {

            $("#loginModal, #chatIconDiv, #sideMenu").toggleClass('hide');

            // animations for bot side

            $('#sign-in').removeClass('scale-in');
            $('#sign-in').addClass('scale-out');
            setTimeout(() => {
                $('#sign-in').removeClass('scale-out');
                $('#sign-in').empty();
                $('#sign-in').html('arrow_forward');
                setTimeout(() => {
                    $('#sign-in').addClass('scale-in');
                }, 500);

            }, 500);
            $('.menu2').removeClass("displaynone");
            $('.menu2').addClass("animated slideInRight");

        } else {

            Materialize.toast(result.msg, 4000)

        }


    })
}
// 

function sendQuestions(file) {



}