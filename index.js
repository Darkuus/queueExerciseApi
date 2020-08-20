const express = require('express');
const routes = require('./src/routes');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

mongoose.connect("mongodb+srv://Darkus:vitor123@mobiledev-wurbf.mongodb.net/queue?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
)


app.listen(3333)
