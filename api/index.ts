const app = require('express')(),
    cors = require("cors"),
    compression = require("compression"),
    helmet = require("helmet");

app.use(cors());
app.options("*", cors());
app.use(helmet());
app.use(compression());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({setTo:"PHP 4.2.2"}));
const config = require('./data/locale.json');
const sites = require("./data/sites.json");

app.get("/", (req, res) => res.json(config));
app.get("/sites", (req, res) => res.json(sites));

app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
});

app.use("*", (req,res)=> {
    res.status(404).json("The route you requested has not been found");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;