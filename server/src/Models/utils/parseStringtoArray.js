module.exports = function parseStringtoArray(arrayasString) {
    return arrayasString.split(",").map(tech => tech.trim())
}