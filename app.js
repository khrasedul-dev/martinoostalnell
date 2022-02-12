const {Composer,Telegraf} = require('micro-bot')

const bot = new Composer()


bot.start(ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , "Hello "+ctx.from.first_name  , {
        reply_markup: {
            keyboard: [
                [{text: "💰 Buy"}],
                [{text: "🌎 Website"},{text: "🚀 RoadMap"}],
                [{text: "💵 Slippage"},{text: "📝 WhitePaper"}],
                [{text: "📜 Contract"}]
            ],
            resize_keyboard: true
        }
    } ).catch("Somthing is wrong")
})

bot.hears('💰 Buy',ctx=>{
    ctx.reply("This is Buy")
})

bot.hears('🌎 Website',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `<b>What Do We Do?</b>\nWe want to blur the line between the cryptocurrency merchants and ordinary consumers. We will popularize the cryptocurrency by giving free admission, and by helping people understand and confide what we believe to be the future of money.` , {
        reply_markup:{
            inline_keyboard:[
                [{text: "Visit our website", url: "https://gravitymetaverse.io"}]
            ]
        },
        parse_mode: "HTML"
    }).catch("Something is wrong")
})

bot.hears('🚀 RoadMap',ctx=>{
    ctx.reply("This is Roadmap")
})

bot.hears('💵 Slippage',ctx=>{
    ctx.reply("This is slippage")
})

bot.hears('📝 WhitePaper',ctx=>{
    ctx.reply("This is WhitePaper")
})

bot.hears('📜 Contract',ctx=>{
    ctx.replyWithHTML(`<b>Contract Us:</b> \nWebsite: https://gravitymetaverse.io/\nInstagram: gravitymetaverse\nFacebook: Gravity Metaverse`).catch("Somthing is wrong")
})




module.exports = bot