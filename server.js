const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs');
const reqLimit = require('./models/reqLimiter');
require('dotenv').config();

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});
app.set('trust proxy', 1);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(reqLimit);
mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
}).then(() => console.log("connected to MONGO DB...")).catch(() => console.log(err));

const routes = require('./routes/routes.js')(app, fs);
const PORT = process.env.PORT || 80;
const server = app.listen(PORT, () => {
    console.log('listening on port %s...', server.address().port);
});
