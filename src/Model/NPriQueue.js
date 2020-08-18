const mongoose = require('mongoose')

const NPriQueue = new mongoose.Schema({
    Code: String,
    CPF: String,
    Status: Number
})

module.exports = mongoose.model('NPriQueue', NPriQueue)