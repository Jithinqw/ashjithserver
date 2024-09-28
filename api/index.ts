const express = require("express");
const app = express();
app.use(express.json());
const config = require('./locale.json');

app.get("/", (req, res) => res.json(config));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;