const { Router, request } = require('express')

const PriQueueController = require('./Controller/PriQueueController')
const NPriQueueController = require('./Controller/NPriQueueController')

const routes = Router()

routes.get('/PriQueue/:status', PriQueueController.index)
routes.post('/PriQueue/save', PriQueueController.save)

routes.get('/NPriQueue/:status', NPriQueueController.index)
routes.post('/NPriQueue/save', NPriQueueController.save)


module.exports = routes