const discord = require("discord.js")
const logHelper = require("./tools/logHelper")
const { Handler } = require("./classes/handler")

const bot = new discord.Client()

bot.on( "ready", () => {
    logHelper.ready( bot.user.tag, bot.guilds.array() )
} )

bot.on( "message", message => {
    
} )

bot.login( "" )
