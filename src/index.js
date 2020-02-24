const discord = require("discord.js")
const logHelper = require("./tools/logHelper")
const messageHandler = require("./handlers/messageHandler")

const bot = new discord.Client()

bot.on( "ready", () => {
    logHelper.ready( bot.user.tag, bot.guilds.array() )
} )

bot.on( "message", message => {
    console.log( "[ MESSAGE INCOMING ]" )
    messageHandler.emit( message )
} )

bot.login( "NjYxODE1MzczMTc1NDU1NzQ0.XlNArg.d36CMo9WFQGBDSYqpYGYIMLcS9o" )
