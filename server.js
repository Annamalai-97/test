const express = require("express");
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb").MongoClient;
let connectionstring = `mongodb://127.0.0.1:27017`;
const app = express();
const dbName = "admin";


let db=null;
mongodb.connect(
  connectionstring,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db(dbName);
    app.listen(5000);
  }
);
app.use(express.json());
app.post("/create-data", function (req, res) {
  db.test_collection("data")
    .insertOne({ name: req.body.text }, function (err, info) {
      res.json(info.ops[0]);
    });
});

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "world" });
});

const userRouter = require("./routes/user");

app.use("/users", userRouter);

// app.listen(3000)
