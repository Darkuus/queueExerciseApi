const mongoose = require('mongoose')

const PriQueue = new mongoose.Schema({
    Code: String,
    CPF: String,
    Status: Number
})

module.exports = mongoose.model('PriQueue', PriQueue)