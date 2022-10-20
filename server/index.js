const { getData, writeNewUser } = require('./server.js');
const express = require('express');
const { makeid } = require('./utils.js');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  getData(res);
});

app.get('/new-user', (req, res) => {
  writeNewUser('carson', 'charrell@umd.edu');
});

app.listen(port, () => console.log('running server on localhost:3001'));
