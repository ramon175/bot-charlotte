    let database = require('../config/db.config')("users");

    const authenticate = (credentials) =>{
        return new Promise((resolve,reject)=>{

            var login = (credentials.login) ? credentials.login : null;
            var password = (credentials.password) ? credentials.password : null;

            console.log(`creds: ${login}, ${password}`);

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

    // authenticate({login:"20723496",password:"12345"}).then((result)=>{
    //     console.log(JSON.stringify(result));
    // }).catch((err)=>{
    //     console.log(err);
    // });
    exports.authenticate = authenticate;