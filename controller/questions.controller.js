let database = require('../config/db.config')("questions");
const fs = require('fs');
const parse = require('csv-parse');

const list = () => {
    return new Promise((resolve, reject) => {
        database.list({
            include_docs: true
        }, (err, result) => {
            if (err) reject({
                err
            });
            resolve(result);
        })
    })
}

const bulk = (questionsFile) => {

    return new Promise((resolve, reject) => {

            let file = fs.readFileSync('./tmp/' + questionsFile);

            parse(file, {
                delimiter: ','
            }, (err, output) => {

                let questionsArr = [];
                let questionObj;
                // console.log(output)

                output.forEach(element => {

                    questionObj = makeQuestion(element);

                    questionsArr.push(questionObj);
                });

                database.bulk({docs:questionsArr},(err,result)=>{
                    if(err) reject({err:true,msg:err});
                    resolve({err:false, result});

                    fs.unlinkSync('./tmp/' + questionsFile);
                })

            });

    })
}

const makeQuestion = (question) =>{

    var auxObj = {
        materia:question[0],
        questao:question[1],
        alternativas:[
            {
                texto:question[2]
            },{
                texto:question[3]
            },{
                texto:question[4]
            },{
                texto:question[5]
            }
        ]
    };

    return auxObj;


}

exports.list = list;
exports.bulk = bulk;