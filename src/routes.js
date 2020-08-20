const { Router, request } = require('express')

const PriQueueController = require('./Controller/PriQueueController')
const NPriQueueController = require('./Controller/NPriQueueController')
const ClientInfoController = require('./Controller/ClientInfoController')

const routes = Router()

routes.get('/PriQueue/:status', PriQueueController.index)
routes.post('/PriQueue/save', PriQueueController.save)
routes.post('/PriQueue/disable', PriQueueController.disable)

routes.get('/NPriQueue/:status', NPriQueueController.index)
routes.post('/NPriQueue/save', NPriQueueController.save)
routes.post('/NPriQueue/disable', NPriQueueController.disable)

routes.get('/ClientInfo/:cpf', ClientInfoController.index)
routes.post('/ClientInfo/save', ClientInfoController.save)

module.exports = routes