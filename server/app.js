const express = require("express");
const mongoose = require("mongoose");
const {port, db_connection} = require("./config.js");
//routes 


//config
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//database connection
mongoose.connect(`${db_connection}`,
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(result => console.log("")).catch(exception => console.log(exception));

//routes binding

//server start
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})