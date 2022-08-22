const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require('./routes');
app.use(cors());

try {
    mongoose.connect(process.env.BD_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () =>
        console.log("Mongoose online")
    );

} catch (e) {
    console.log("Mongoose offline");
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


app.listen(process.env.PORT || process.env.SERVER_PORT, () => {
    try {
        console.log("Servidor online");
    } catch (e) {
        console.log("Servidor offline: ");
    }
}
)