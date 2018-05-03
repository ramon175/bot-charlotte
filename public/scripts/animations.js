$(document).ready(function () {
    console.log("animations.js loaded");
    $(function () {
        var sign = true;
        var switch_btn = false;
        var animando = false;
        var switch_btn2 = false;
        var switch_btn_chat = false;
        var animando_chat = false;
        var animando2 = false;
        var e = jQuery.Event("keypress");
        var menu_aberto = false;
        var flipflop = false;
        e.which = 13;
        e.keyCode = 13;

        // animação menu 1

        $('.burguerHolder').click(function (e) {

            if (menu_aberto && !switch_btn) {
                menu_aberto = false;
                // flipflop = true;
                $('#sign-in').click();
            };

            //animaçao menu 
            //abre
            if (!switch_btn && !animando && !menu_aberto) {
                animando = true;
                console.log("on burguer");
                $('.menu').removeClass("displaynone");
                $('.menu').addClass("animated slideInLeft");
                $('.animated-icon').addClass("anim");

                // if (flipflop == true ) {
                //     $('.overlay').removeClass("displaynone");
                //     $('.overlay').addClass("animated fadeIn");
                //     flipflop = false;
                // }

                setTimeout(() => {
                    animando = false;
                    menu_aberto = true;
                    switch_btn = true;
                }, 1000)
                //abre

                //fecha
            } else if (switch_btn && !animando) {

                console.log("off");
                $('.animated-icon').removeClass("anim");
                $('.menu').removeClass("animated slideInLeft");
                $('.menu').addClass("animated slideOutLeft");

                // if (flipflop == false) {
                //     $('.overlay').addClass("animated fadeOut");
                // }

                setTimeout(() => {
                    $('.menu').addClass("displaynone");
                    $('.menu').removeClass("animated slideOutLeft");

                    // if (flipflop = false) {
                    //     $('.overlay').addClass("displaynone");
                    //     $('.overlay').removeClass("animated fadeOut");
                    //     flipflop = true;
                    // }

                    switch_btn = false;
                    animando = false;
                    menu_aberto = false;
                }, 1000)
            }
            //fecha
        });
        //animaçao menu 1


        //animaçao menu 2
        $('#sign-in').click(function (e) {

            if (menu_aberto && !switch_btn_chat) {
                menu_aberto = false;
                // flipflop = true;
                $('.burguerHolder').click();
            };

            //animaçao menu 
            //abre
            if (!switch_btn_chat && !animando_chat && !menu_aberto) {
                animando_chat = true;
                console.log("on");
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

                // if (flipflop == true) {
                //     $('.overlay').removeClass("displaynone");
                //     $('.overlay').addClass("animated fadeIn");
                //     flipflop = false;
                // }

                setTimeout(() => {
                    animando_chat = false;
                    menu_aberto = true;
                    switch_btn_chat = true;
                }, 1000)
                //abre

                //fecha
            } else if (switch_btn_chat && !animando_chat) {
                $('#sign-in').removeClass('scale-in');
                $('#sign-in').addClass('scale-out');
                setTimeout(() => {
                    $('#sign-in').removeClass('scale-out');
                    $('#sign-in').empty();
                    $('#sign-in').html('chat');
                    setTimeout(() => {
                        $('#sign-in').addClass('scale-in');
                    }, 500);
                }, 500);
                console.log("off");
                $('.menu2').removeClass("animated slideInRight");
                $('.menu2').addClass("animated slideOutRight");

                // if (flipflop == false) {
                //     $('.overlay').addClass("animated fadeOut");
                // }

                setTimeout(() => {
                    $('.menu2').addClass("displaynone");
                    $('.menu2').removeClass("animated slideOutRight");

                    // if (flipflop = false) {
                    //     $('.overlay').addClass("displaynone");
                    //     $('.overlay').removeClass("animated fadeOut");
                    //     flipflop = true;
                    // }

                    switch_btn_chat = false;
                    animando_chat = false;
                    menu_aberto = false;
                }, 1000)
            }

        });
        //fecha
        //animaçao menu 1




    });

});