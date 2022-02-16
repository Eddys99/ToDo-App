require('./database/db_connection');
const express = require('express');
const bodyParser = require('body-parser');

const listRouter = require("./routes/read");
const createRouter = require("./routes/create");
const updateRouter = require("./routes/update");
const deleteRouter = require("./routes/delete");

const app = express();
app.use(bodyParser.json());

app.use("/read-task", listRouter);
app.use("/create-task", createRouter);
app.use("/update-task", updateRouter);
app.use("/delete-task", deleteRouter);

app.listen(3000, () => console.log(`Server listening to port 3000`));