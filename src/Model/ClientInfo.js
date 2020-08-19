const mongoose = require('mongoose')

const ClienteInfo = new mongoose.Schema({
    Code: String,
    CPF: String,
})

module.exports = mongoose.model('ClienteInfo', ClienteInfo)