const NPriQueue = require ('../Model/NPriQueue')

module.exports = {
    async index(request, response) {
        let { status } = request.params
        const queueReturn = await NPriQueue.find({status: status})
        return response.json(queueReturn)
    },

    async save(request, response) {
            let { cpf } = request.body

            let NPriQueueReturn = await NPriQueue.findOne({},'Code -_id').sort({ _id: -1 })

            if(NPriQueueReturn)
                code = `CRN-${parseInt(NPriQueueReturn.Code.replace('CRN-','')) + 1}`
            else
                code = 'CRN-1'

            var queue = new NPriQueue({
                Code: code,
                CPF: cpf,
                Status: 1
            })
            
            const result = await NPriQueue.create(queue)
            return response.json(result)
    },
}