require('dotenv').load()

var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1({
    username: process.env.conversation_username,
    password: process.env.conversation_password,
    url: 'https://gateway.watsonplatform.net/assistant/api/',
    version: '2018-02-16'
});

var sendMessage = (input, context) => {
    return new Promise((resolve, reject) => {
        var context = (context != null) ? context : {};
        if (input != null) {
            assistant.message({
                workspace_id: process.env.workspace_id,
                input: {
                    'text': input
                },
                context: context
            }, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    context = res.context;
                    resolve(res);
                }
            });
        } else {
            reject({ err: true, msg: 'Input vazio' });
        }
    })
}

exports.sendMessage = sendMessage;
