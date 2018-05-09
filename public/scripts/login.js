$(document).ready(() =>{

    $('#ra').val('20723496');
    $('#password').val('12345');

    $('.dropify').dropify({
        messages: {
        'default': 'Arraste um arquivo aqui ou clique',
        'replace': 'Arraste um arquivo ou clique para substituir',
        'remove':  'Remover',
        'error':   'Algo de errado aconteceu!'
    },
        error:{
            'fileExtension':'Este formato de arquivo não é permitido ({{ value }} somente)'
        }
    
});


    console.log("login.js loaded");
    
    $('#loginForm').submit((event) =>{
        
        event.preventDefault();

        let ra = $('#ra').val(),
        password = $('#password').val();

        let credentials = {
            login: ra,
            password
        }

        login({credentials});

    });


});

function login(credentials){
    console.log("Login");
    
    $.post('/user/authenticate', credentials, (result, err) =>{
        console.log(result);

        if(!result.err){

            // $('#loginModal').addClass('hide');
            // $('#chatIconDiv').removeClass('hide');
            // $('#sideMenu').removeClass('hide');

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

        }else{



            Materialize.toast(result.msg, 4000)

        }


    })
}

