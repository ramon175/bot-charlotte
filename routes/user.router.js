const express = require('express')

const userRouter = express.Router()

const userController = require('../controller/users.controller');

const router = () => {
    userRouter.route('/authenticate')
        .post(authenticate)

        return userRouter;
}

const authenticate = (req,res) => {
    let credentials = (req.body.credentials != undefined) ? req.body.credentials : null;

    console.log("Authenticate chamado");
    
    if(credentials != null){
        
        userController.authenticate(credentials)
            .then((response) =>{
                console.log(response);
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

console.log(userController);

module.exports = router;