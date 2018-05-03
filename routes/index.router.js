const express = require('express');

var indexRouter = express.Router();


var router = () => {
    indexRouter.route('/')
    .get(indexer);

    return indexRouter;
}

var indexer = (req,res) => {
    res.render('index.html')
}

module.exports = router;