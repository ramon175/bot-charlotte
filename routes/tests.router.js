const express = require('express')

const testsRouter = express.Router()

const fs = require('fs');
const path = require('path');

const router = () => {
    testsRouter.route('/getTests')
        .get(getTests);

        return testsRouter;
}

const getTests = (req,res) =>{

    let filePath = path.join('./tmp/Provas.zip');
    let stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type':'application/zip',
        'Content-Length': stat.size,
        'Content-Disposition': 'attachment; filename=Provas.zip'
    });

    let readStream = fs.createReadStream(filePath);

    readStream.pipe(res);

}


module.exports = router;