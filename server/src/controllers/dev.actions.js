const Dev = require('../Models/dev.model')
const parseStringtoArray = require('../Models/utils/parseStringtoArray')

module.exports = {
    async deleteDev(req, res) {
        console.log(req.params)
        const { id } = req.params
        const dev = await Dev.findById(id)
        await dev.delete()
        return res.json(dev)
    },

    async updateDev(req, res) {
        const { id } = req.params
        const { name, techs } = req.body
        const techArray = parseStringtoArray(techs)
        const dev = await Dev.findById(id)
        await dev.update({
            name,
            techs: techArray
        })
        await dev.save()
        return res.json(dev)
    }
}