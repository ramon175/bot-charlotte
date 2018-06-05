var express = require('express');
var Log = require('log.pets')
var conversationRouter = express.Router();
var conversationCrl = require('../controller/conversation.controller');

var router = () => {
    conversationRouter.route('/assistant')
        .post(send);

    return conversationRouter;
}

var send = (req, res) => {
    var input = (req.body.input != undefined) ? req.body.input : null;
    var context = (req.body.context != undefined) ? req.body.context : {};
    conversationCrl.sendMessage(input, context)
        .then((response) => {
                res.send(response);
        })
        .catch((err) => {
            res.send(err);
        })
}

module.exports = router;
