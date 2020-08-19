const PriQueue = require ('../Model/PriQueue')
const ClientInfo = require ('../Model/ClientInfo')

module.exports = {
    async index(request, response) {
        let { cpf } = request.params
        const clienteReturn = await ClientInfo.findOne({CPF: cpf},{'_id': false,'__v':false}).sort({ _id: -1 })
        return response.json(clienteReturn)
    },

    async save(request, response) {
            let { cpf } = request.body

            let PriQueueReturn = await PriQueue.findOne({},'Code -_id').sort({ _id: -1 })

            if(PriQueueReturn)
                code = `CRP-${parseInt(PriQueueReturn.Code.replace('CRP-','')) + 1}`
            else
                code = 'CRP-1'

            var clienteInfo = new ClientInfo({
                Code: code,
                CPF: cpf,
            })

            const result = await ClientInfo.create(clienteInfo)
            return response.json(result)
    },
}