const express  =require('express')
const mongodb = require('mongodb').MongoClient
const app = express()
const dbName = "admin1"

var database;

let connectionstring = `mongodb://localhost:27017`
mongodb.connect(connectionstring,
    { useNewUrlParser: true,useUnifiedTopology: true },
    function (err, client) 
    {
    const db = client.db(dbName);
    database = db;
    app.listen(5000)
    })
app.use(express.json())
app.post('/create-data',function(req,res){
    database.test_collection('data').insertOne({name:req.body.text}, function (
        err,
        info
      ) {
        res.json(info.ops[0])
      })
})

app.set('view engine','ejs')
app.get('/',(req,res) =>{
    console.log('Here')
    res.render("index",{text:'world'})
})

const userRouter = require('./routes/user')

app.use('/users', userRouter)

// app.listen(3000)