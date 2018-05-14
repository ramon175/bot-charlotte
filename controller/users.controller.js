    // set database
    let database = require('../config/db.config')("users");

    // list all method
    const list = () => {
        return new Promise((resolve, reject) => {
            database.list({
                include_docs: true
            }, (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        })
    }
    // 

    // authenticate method
    const authenticate = (credentials) =>{
        return new Promise((resolve,reject)=>{

            var login = (credentials.login) ? credentials.login : null;
            var password = (credentials.password) ? credentials.password : null;

            if(login != null && password != null){
                database.find({
                    selector:{
                        login
                    }
                },(err,result) =>{
                    
                    if(err) reject(err);
                    if(result.docs.length != 0){

                        var user = result.docs[0];

                        if(user.login == login){
                            if(user.password == password){
                                resolve(user);
                            }else{
                                reject({
                                    err:true,
                                    msg:'Senha Incorreta'
                                });
                            }
                        }
                    }else{
                        reject({
                            err:true,
                            msg:'Usuário não encontrado'
                        });
                    }
                })
            }else{
                reject({
                    err:true,
                    msg:"Credenciais Inválidas"
                })  
            }

        });
    }
    // 

    exports.authenticate = authenticate;
    exports.list = list;