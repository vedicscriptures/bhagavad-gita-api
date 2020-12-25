const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);
const PORT = process.env.PORT || 80;
const server = app.listen(PORT, () => {
    console.log('listening on port %s...', server.address().port);
});
