const {Composer,Telegraf} = require('micro-bot')

const bot = new Composer()


bot.start(ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , "Hello "+ctx.from.first_name  , {
        reply_markup: {
            keyboard: [
                [{text: "📄 Slippage"}],
                [{text: "💸 Price"},{text: "📃 Whitepaper"}],
                [{text: "💹 Chart"},{text: "📖 RoadMap"}],
                [{text: "☎ Contract"}]
            ],
            resize_keyboard: true
        }
    } )
})

bot.hears('📄 Slippage',ctx=>{
    ctx.reply("This is Slippage")
})

bot.hears('💸 Price',ctx=>{
    ctx.reply("This is Price")
})

bot.hears('📃 Whitepaper',ctx=>{
    ctx.reply("This is Whitepaper")
})

bot.hears('💹 Chart',ctx=>{
    ctx.reply("This is chart")
})

bot.hears('📖 RoadMap',ctx=>{
    ctx.reply("This is RoadMap")
})

bot.hears('☎ Contract',ctx=>{
    ctx.replyWithHTML(`<b>Contract Us:</b> \nWebsite: https://gravitymetaverse.io/\nInstagram: gravitymetaverse\nFacebook: Gravity Metaverse`)
})




module.exports = bot