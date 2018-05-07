var xmlhttp = new XMLHttpRequest();
let ENDPOINT = "/chat";
let ASSISTANT_API = "/assistant"

$(document).ready(function () {
    console.log("chat.js loaded");
    sendMessage({"input": ""})
    //pegar input do usuario no chat
    $(".chatFooter").keypress(function (event) {
        if (event.keyCode == 13) {
            var input_value = $(".chatFooter").val();
            if (input_value != '') {
                $(".chatFooter").val(''); // reset input data 
                $(".chatholder").append('<p class="balao me">' + input_value + '</p>');
                $(".chatholder").stop().animate({
                    scrollTop: $(".chatholder")[0].scrollHeight
                }, 2000);

                var obj = {
                    "input": input_value
                }

                sendMessage(obj)                
            }
        }
    });
    //pegar input do usuario no chat

});

function sendMessage(obj){
    xhrPost(ENDPOINT + ASSISTANT_API, obj, function (result) {
        console.log(result);
        
        result = JSON.parse(result)
        let output = result['output']['text'][0];
        $(".chatholder").append('<p class="balao them">' + output + '</p>');
        $(".chatholder").stop().animate({
            scrollTop: $(".chatholder")[0].scrollHeight
        }, 2000);
    }, function (err) {
        $(".chatholder").append('<p class="balao them">Não estou disponivel no momento... Tente novamente mais tarde!'+'</p>');
        $(".chatholder").stop().animate({
            scrollTop: $(".chatholder")[0].scrollHeight
        }, 2000);
    })
}

