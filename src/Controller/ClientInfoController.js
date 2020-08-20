const PriQueue = require ('../Model/PriQueue')
const ClientInfo = require ('../Model/ClientInfo')

module.exports = {
    async index(request, response) {
        let { cpf } = request.params
        const clienteReturn = await ClientInfo.findOne({CPF: cpf},{'_id': false,'__v':false}).sort({ _id: -1 })
        return response.json(clienteReturn)
    },

    async save(request, response) {
            let { Code, CPF } = request.body
            const clienteInfo = new ClientInfo({
                Code: Code,
                CPF: CPF,
            })
            const result = await ClientInfo.create(clienteInfo)
            return response.json(result)
    },
}