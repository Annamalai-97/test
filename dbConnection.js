const { MongoClient } = require("mongodb");
const connectionstring = `mongodb://localhost:27017/`;
const client = new MongoClient(connectionstring,{useNewUrlParser: true,});

let dbConnection;

module.exports = {
    connectToServer : function (callback)
    {
        client.connect(function (err,db)
        {
            if (err || !db)
            {
                return callback(err);
            }
            dbConnection = db.db("admin");
            console.log("Successfully connected to MongoDB.");
            return callback();
        });
    },
    getDb : function ()
    {
        return dbConnection;
    },
};