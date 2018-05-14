module.exports = (db) => {
    require('dotenv').load();
    
    var Cloudant = require('cloudant');
    
    var username = process.env.cloudant_username || 'charlotte';
    var password = process.env.cloudant_password;
    var cloudant = Cloudant({account:username, password:password});

    var database = cloudant.db.use(db);
    
    return database;
}
