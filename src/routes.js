const { Router, request } = require('express')

const PriQueueController = require('./Controller/PriQueueController')
const NPriQueueController = require('./Controller/NPriQueueController')
const ClienteInfoController = require('./Controller/ClienteInfoController')

const routes = Router()

routes.get('/PriQueue/:status', PriQueueController.index)
routes.post('/PriQueue/save', PriQueueController.save)

routes.get('/NPriQueue/:status', NPriQueueController.index)
routes.post('/NPriQueue/save', NPriQueueController.save)

routes.get('/ClienteInfo/:cpf', ClienteInfoController.index)
routes.post('/ClienteInfo/save', ClienteInfoController.save)

module.exports = routes