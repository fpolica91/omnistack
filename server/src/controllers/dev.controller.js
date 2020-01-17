const Dev = require('../Models/dev.model')
const axios = require('axios')
const parseStringtoArray = require('../Models/utils/parseStringtoArray')

module.exports = {
    async index(req, res) {
        const devs = await Dev.find()
        return res.json(devs)
    },

    async search(req, res) {

        const { latitude, longitude, techs } = req.query
        console.log(req.query, " the query")
        const techArray = parseStringtoArray(techs)
        const devs = await Dev.find({
            techs: { $in: techArray },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 30000
                }
            }
        })
        console.log(devs, " the devs")
        return res.json(devs)

    },



    async devCreate(req, res) {
        const { github_username, techs, latitude, longitude } = req.body
        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const response = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login, avatar_url, bio } = response.data
            const techsArray = parseStringtoArray(techs)
            // techs.split(",").map(tech => tech.trim())

            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return res.json(dev)
    }
}