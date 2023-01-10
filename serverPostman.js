const express = require("express");
const app = express();
const recordRoutes = express.Router();
recordRoutes.route("/listings").get(async function (req, res) {
    const dbConnect = dbo.getDb();

    dbConnect.collection("admin")
}