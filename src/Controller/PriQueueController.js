const PriQueue = require ('../Model/PriQueue')
const removeMongoProps = require('../Services/removeMongoProps')

module.exports = {
    async index(request, response) {
        let { status } = request.params
        const queueReturn = await PriQueue.find({Status: status},{'_id': false,'__v':false})
        return response.json(queueReturn)
    },

    async save(request, response) {
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

            const result = removeMongoProps(await PriQueue.create(queue))
            
            return response.json(result)
    },

    async disable(request, response) {
        let { code } = request.body

        let PriQueueReturn = await PriQueue.findOne({Code: code})
        PriQueueReturn.Status = 0
        const result = await PriQueueReturn.save()

        return response.json(result)
    },
}