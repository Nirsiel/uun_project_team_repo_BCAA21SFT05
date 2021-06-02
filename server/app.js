const express = require("express");
const mongoose = require("mongoose");
const {port, db_connection} = require("./config.js");
//routes
const keywordsRoute = require("./routes/keywords-route");
const materialsRoute = require("./routes/materials-route");
const recipesRoute = require("./routes/recipes-route");
const ratingRoute = require("./routes/rating-route");

//config
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//database connection
mongoose
    .connect(`${db_connection}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to Database"))
    .catch(exception => console.log(exception));

//routes binding
app.use("/keywords", keywordsRoute);
app.use("/materials", materialsRoute);
app.use("/recipes", recipesRoute);
app.use("/rating", ratingRoute);


//server start
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})
