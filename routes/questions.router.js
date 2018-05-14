const express = require('express')

const questionsRouter = express.Router()

const questionsController = require('../controller/questions.controller');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './tmp/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.csv')
    }
  })

const upload = multer({storage});

const router = () => {
    questionsRouter.route('/list')
        .post(list);

    questionsRouter.route('/bulk')
        .post(upload.single('file'),bulk)

        return questionsRouter;
}

const list = (req,res) =>{

    questionsController.list().then((response) =>{
        res.send(response);
    }).catch((err) =>{
        res.send(err);
    });

}

const bulk = (req,res) => {

    // console.log(req.file);

    if(req.file){

        questionsController.bulk(req.file.filename).then((response) =>{
            res.send(response);
        }).catch((err)=>{
            res.send(err);
        });
        
    }else{
        res.send({err: true, msg: 'unexpected error'})
    }

}


module.exports = router;