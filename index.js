require('./database/db_connection');
const express = require('express');
const bodyParser = require('body-parser');

const listRouter = require("./src/routes/read");
const createRouter = require("./src/routes/create");
const updateRouter = require("./src/routes/update");
const deleteRouter = require("./src/routes/delete");

const app = express();
app.use(bodyParser.json());

app.use("/read", listRouter);
app.use("/create", createRouter);
app.use("/update", updateRouter);
app.use("/delete", deleteRouter);

app.listen(3000, () => console.log(`Server listening to port 3000`));