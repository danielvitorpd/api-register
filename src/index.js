require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/html/index.html')
})

app.listen(process.env.PORT || 3000);