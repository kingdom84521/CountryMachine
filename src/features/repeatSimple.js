const { Feature } = require("../classes/feature")

const feature = new Feature()

feature.processor = data => {
    console.log( data )
}

module.exports = feature