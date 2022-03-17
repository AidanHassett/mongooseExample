const express = require("express");
const app = express();
const router = require("./router.js");
const parser = require("body-parser");
app.use(parser.json());
app.use(router);
app.listen(4494);
