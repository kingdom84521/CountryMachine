const { Handler } = require("../classes/handler")

const repeatSimple = require("../features/repeatSimple")

const handler = new Handler()

// feature register list

handler.subscribe( repeatSimple )

// data preprocessing

// handler.preprocess()

module.exports = handler

