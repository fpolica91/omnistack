const mongoose = require('mongoose')
const LocationSchema = require('./utils/location.schema')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: LocationSchema,
        // use index when using geolocation
        index: '2dsphere'
    }
})

module.exports = mongoose.model("Dev", DevSchema)