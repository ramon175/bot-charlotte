/* Modules Initialization*/
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const pet = require('log.pets');


/*                      */

/* App Initialization */
const app = express();
const http = require('http').Server(app);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/nodeStyle', express.static(path.join(__dirname , '/node_modules')));
app.use('/style', express.static(path.join(__dirname, '/views/style')));
app.use(cors());
/*                     */

/* Routing Initialization */
// Routers
    var indexRouter = require('./routes/index.router')();
    var conversationRouter = require('./routes/conversation.router')();
    var userRouter = require('./routes/user.router')();
    var questionsRouter = require('./routes/questions.router')();
//


app.use('/', indexRouter);
app.use('/chat', conversationRouter);
app.use('/user', userRouter);
app.use('/questions',questionsRouter)

/* LISTENER */
http.listen(app.get('port'), () => {
    pet.zoo('Express server','listening on','port '+app.get('port') );
    // console.log('Express server listening on port ' + app.get('port'));
})