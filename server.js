const express = require("express");
const path = require("path");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT)
});
