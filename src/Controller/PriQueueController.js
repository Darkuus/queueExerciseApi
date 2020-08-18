const PriQueue = require ('../Model/PriQueue')

module.exports = {
    async index(request, response) {
        let { status } = request.params
        const queueReturn = await PriQueue.find({status: status})
        console.log(queueReturn)
        return response.json(queueReturn)
    },

    async save(request, response) {
            console.log('ph hey lets go')
            let { cpf } = request.body

            let PriQueueReturn = await PriQueue.findOne({},'Code -_id').sort({ _id: -1 })

            if(PriQueueReturn)
                code = `CRP-${parseInt(PriQueueReturn.Code.replace('CRP-','')) + 1}`
            else
                code = 'CRP-1'

            var queue = new PriQueue({
                Code: code,
                CPF: cpf,
                Status: 1
            })

            const result = await PriQueue.create(queue)
            return response.json(result)
    },
}