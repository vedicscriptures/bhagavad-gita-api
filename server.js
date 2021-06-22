const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//mongo db connection
mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
}).then(() => console.log("connected to MONGO DB...")).catch(() => console.log(err));


const routes = require('./routes/routes.js')(app,express);

const PORT = process.env.PORT || 80;
const server = app.listen(PORT, () => {
    console.log('listening on port %s...', server.address().port);
});
