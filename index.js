const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const {todoRouter} = require('./router');


const port = 3000;
const app = express();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongo connected'));


app.use(bodyParser.json());
app.use('/', todoRouter);

app.all('*', (req, res) => res.sendStatus(404));

app.listen(port, () => console.log(`Listening on port ${port}`));