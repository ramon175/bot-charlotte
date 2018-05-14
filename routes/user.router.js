const express = require('express')

const userRouter = express.Router()

const userController = require('../controller/users.controller');

const router = () => {
    userRouter.route('/authenticate')
        .post(authenticate);

    userRouter.route('/list')
        .post(list);

        return userRouter;
}

const authenticate = (req,res) => {
    let credentials = (req.body.credentials != undefined) ? req.body.credentials : null;

    // console.log("Authenticate chamado");
    
    if(credentials != null){
        
        userController.authenticate(credentials)
            .then((response) =>{
                // console.log(response);
                res.send(response)
            })
        .catch((err)=>{
            res.send(err);
        })
    }else{
        res.send({
            err:true,
            msg:"null"
        })
    }
}

const list = (req,res) =>{

    userController.list().then((response)=>{
        res.send(response);
    }).catch((err)=>{
        res.send(err);
    })

}

module.exports = router;