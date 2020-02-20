const _ = require("lodash")
const chalk = require("chalk")
const day = require("dayjs")

var ready = ( name, servers ) => { 
    var registerdServers = []

    for ( element of servers )
    {
        var target =  _.pick( element, ["name", "joinedAt"] )

        target.joinedAt = day( target.joinedAt ).format( " YYYY-MM-DD HH:mm " )

        registerdServers.push( target )
    }

    console.log( `${ name } 啟動完成` )
    console.log( `[ 已登記之伺服器 ]` )
    console.log( "-".repeat( 40 ) )
    console.log( `[${ chalk.greenBright( " 伺服器名稱 " ) }] ${ chalk.bgWhite.magenta( " 機器人加入時間 " ) }` )
    console.log( "-".repeat( 40 ) )
    for ( element of registerdServers )
    {
        console.log( `[ ${ chalk.greenBright( element.name ) } ] ${ chalk.bgWhite.magenta( element.joinedAt ) }` )
    }
    console.log( "-".repeat( 40 ) )
}

var messageIncome = msg => {

}

module.exports = {
    ready,
    messageIncome
}